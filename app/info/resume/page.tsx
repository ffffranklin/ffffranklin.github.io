import Resume from '../../../markdown/resume.mdx';
import styles from './page.module.scss';
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Franklin Clark | Software Engineer | Resume',
};

export default function Page() {
    return <>
      <style>
        {'@page { size: auto; margin: 10mm 10mm 10mm 10mm; color:red}'}
      </style>
      <div className={styles.resumeWrapper}>
        <article className={styles.resume}><Resume/></article>
      </div>
    </>;
}
