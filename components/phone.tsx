'use client';

import { useSearchParams } from 'next/navigation';

export default function Phone() {
  const num = atob('NDE1LTMyMC02NjYz');
  const searchParams = useSearchParams();

  return <>{searchParams?.get('phone') && num}</>;
}
