import '../styles.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {AppProps} from 'next/app';
import {Martel} from 'next/font/google';

// eslint-disable-next-line new-cap
const martel = Martel({weight: ['400', '900'], subsets: ['latin']});

/**
 *
 * This default export is required in a new `pages/_app.js` file.
 *
 * @param {AppProps.Component} Component
 * @param {AppProps.pageProps} pageProps
 * @return {JSX.Element}
 * @constructor
 */
export default function MyApp({Component, pageProps}) {
  return (
    <main className={martel.className}>
      <Component {...pageProps} />
    </main>
  );
}
