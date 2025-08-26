'use client';

import { useSearchParams } from 'next/navigation';

export default function Phone() {
  const location = atob('U2FjcmFtZW50bywgQ0E=');
  const searchParams = useSearchParams();

  return <>{searchParams?.get('personal') && <li>{location}</li>}</>;
}
