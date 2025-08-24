import styles from './resume.module.scss';
import React from 'react';
import ResumeContent from '../../../../../markdown/resume.mdx';

export default function Resume() {
  return (
    <div className={styles.resumeWrapper}>
      <article className={styles.resume}>
        <ResumeContent />
      </article>
    </div>
  );
}
