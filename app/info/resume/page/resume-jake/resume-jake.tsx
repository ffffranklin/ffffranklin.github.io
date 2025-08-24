import styles from './resume-jake.module.scss';
import React from "react";
import ResumeContent from "../../../../../markdown/resume.mdx";

export default function ResumeJake() {
  return (
    <div className={styles.resumeJakeWrapper}>
      <article className={styles.resumeJake}>
        <ResumeContent />
      </article>
    </div>
  )
}
