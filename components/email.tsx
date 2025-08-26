'use client';

import { useSearchParams } from 'next/navigation';

export default function Phone() {
  const email = atob('ZmZmZnJhbmtsaW5AcG9ib3guY29t');
  const searchParams = useSearchParams();
  const visible = searchParams?.get('personal');

  return <li>{visible && <a href={`mailto:${email}`}>{email}</a>}</li>;
}
