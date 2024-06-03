import '../styles.css';
import { AppProps } from 'next/app';

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
  return <Component {...pageProps} />;
}
