import {Metadata} from 'next';
import packageInfo from '../package.json';
import React from 'react';

export const metadata: Metadata = {
  title: 'Franklin Clark',
  description: packageInfo.description,
  authors: {name: packageInfo.author},
  keywords: packageInfo.keywords,
};

/**
 *
 * @param {React.ReactNode} children
 * @constructor
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
