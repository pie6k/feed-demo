import { createSocketFeedClient } from '~app/utils/socket';

export interface FeedUser {
  id: number;
  image_url: string;
  name: string;
  username: string;
}

export interface FeedEvent {
  id: string;
  timestamp: number;
  user: FeedUser;
  message: string;
  tags: string[];
}

export const feedSocketClient = createSocketFeedClient<FeedEvent>(
  'wss://chaotic-stream.herokuapp.com',
);
