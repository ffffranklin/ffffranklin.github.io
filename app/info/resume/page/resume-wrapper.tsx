'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import ResumeJake from './resume-jake/resume-jake';
import Resume from './resume/resume';

export default function ResumeWrapper() {
  const searchParams = useSearchParams();
  const isJakeTheme = searchParams?.get('theme')?.toLowerCase() === 'jake';

  return <>{(isJakeTheme && <ResumeJake />) || <Resume />}</>;
}
