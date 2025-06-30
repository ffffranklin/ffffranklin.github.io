import Resume from '../../../markdown/resume.mdx';
import styles from './page.module.scss';
import React from "react";

export default function Page() {
    return <>
      <style>
        {'@page { size: auto; margin: 10mm 10mm 10mm 10mm; color:red}'}
      </style>
      <article className={styles.resume}><Resume/></article>
    </>;
}
