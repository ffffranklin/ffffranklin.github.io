import Head from 'next/head';
import {LogoFlip} from './logo-flip';
import styles from './layout.module.scss';

/**
 *
 * @constructor
 */
export function Layout({children}) {
  const viewport = [
    'width=device-width',
    'initial-scale=1.0',
    'minimum-scale=1.0',
    'maximum-scale=1.0',
    'user-scalable=0',
  ].join(', ');

  return (
    <>
      <Head>
        <title>Franklin Clark</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content={viewport}/>

        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

        <meta name="description" content="{{ site.description }}"/>
        <meta name="keywords" content="{{ site.keywords }}"/>
        <meta name="author" content="{{ site.author }}"/>

        <link rel="icon" type="image/png" href='/img/favico.png'/>

        <meta
          name="google-site-verification"
          content="UVOnQLqPkw5VAAj0ks_xklj7weCPxyTofeaYxR0d160"
        />
        <meta
          name="google-site-verification"
          content="h4nQlHxZ3EiPehxMmDG7-Cq2f-KgEEv4wl3LI1nwybM"
        />
      </Head>
      <div className={styles.siteWrapper}>

        <header className={styles.simpleHeader}>
          <LogoFlip/>
        </header>

        <div className="page-content ">
          <div className={styles.contentWrapper}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
