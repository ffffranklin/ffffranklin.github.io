import '../styles.css';
import { AppProps } from 'next/app';
import { Martel } from 'next/font/google';

const martel = Martel({ weight: ['400','900'], subsets: ['latin']});

/**
 *
 * This default export is required in a new `pages/_app.js` file.
 *
 * @param {AppProps.Component} Component
 * @param {AppProps.pageProps} pageProps
 * @return {JSX.Element}
 * @constructor
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={martel.className}>
      <Component {...pageProps} />
    </main>
  );
}
