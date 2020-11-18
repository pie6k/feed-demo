export function createSocketFeedClient<T>(wsUrl: string) {
  let sharedConnection: WebSocket | null = null;

  function getConnection() {
    if (sharedConnection) {
      return sharedConnection;
    }

    sharedConnection = new WebSocket(wsUrl);

    return sharedConnection!;
  }

  function subscribe(handler: (message: T) => void) {
    const connection = getConnection();

    function handleMessage(messageEvent: MessageEvent) {
      // TODO make sure we can parse JSON
      const data = JSON.parse(messageEvent.data) as T;
      handler(data);
    }
    connection.addEventListener('message', handleMessage);

    return function stop() {
      connection.removeEventListener('message', handleMessage);
    };
  }

  function close() {
    if (!sharedConnection) {
      throw new Error(`Cannot close connection that is not opened`);
    }

    sharedConnection.close();
    sharedConnection = null;
  }

  return {
    close,
    subscribe,
  };
}
