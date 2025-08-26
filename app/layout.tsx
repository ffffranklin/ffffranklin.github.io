import { Metadata } from 'next';
import packageInfo from '../package.json';
import React from 'react';
import styles from './layout.module.scss';
import { Martel, Open_Sans } from 'next/font/google';

const martel = Martel({
  weight: ['300', '400', '700', '800'],
  subsets: ['latin'],
});

const openSans = Open_Sans({
  weight: ['300', '400', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Franklin Clark',
  description: packageInfo.description,
  authors: { name: packageInfo.author },
  keywords: packageInfo.keywords,
  icons: { icon: '/img/favico.png' },
};

/**
 *
 * @param {React.ReactNode} children
 * @constructor
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang='en'
        className={[
          styles.normalize,
          martel.className,
          openSans.className,
        ].join(' ')}
      >
        <body>{children}</body>
      </html>
    </>
  );
}
