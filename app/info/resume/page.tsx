import ResumeWrapper from './page/resume-wrapper';
import React, { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franklin Clark | Software Engineer | Resume',
};

export default function Page() {
  return (
    <>
      <style>
        {'@page { size: auto; margin: 10mm 10mm 10mm 10mm; color:red}'}
      </style>
      <Suspense>
        <ResumeWrapper />
      </Suspense>
    </>
  );
}
