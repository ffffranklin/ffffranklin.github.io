import {Metadata} from 'next';
import * as site from '../package.json';

export const metadata: Metadata = {
  title: 'Franklin Clark',
  description: site.description,
  authors: {name: site.author},
  keywords: site.keywords,
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
