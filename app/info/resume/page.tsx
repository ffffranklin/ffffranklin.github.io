import Resume from '../../../markdown/resume.mdx';
import styles from './page.module.scss';

export default function Page() {
    return <>
      <article className={styles.resume}><Resume/></article>
    </>;
}
