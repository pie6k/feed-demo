import { AppProps } from 'next/app';

import '~app/styles/reset.css';
import '~app/styles/root.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
