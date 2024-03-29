import {Html, Head, Main, NextScript} from 'next/document';

/**
 *
 * @constructor
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href='https://cdn.jsdelivr.net/font-hack/2.013/css/hack-extended.min.css' />
        <link rel="canonical" href="http://ffffranklin.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
