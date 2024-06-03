import styles from './home.module.scss';

/**
 *
 * @constructor
 */
export function Home() {
  return (
    <>
      <section className={styles.intro}>
        <div className="wrapper">
          <h1>Franklin Clark</h1>
          <p className="content">
            Looks like you&apos;re a little early! My site is still being built. In
            the meantime check out my work
            on <a href="https://github.com/ffffranklin" target="_blank" rel="noreferrer">GitHub</a> or <a href="http://codepen.io/ffffranklin" target="_blank" rel="noreferrer">CodePen</a> and
            follow me on <a href="https://twitter.com/_ffffranklin" target="_blank" rel="noreferrer">Twitter</a>.
          </p>
        </div>
      </section>
      <section className="contact row">
        <div className={styles.introBtnWrapper}>
          <a href="mailto:ffffranklin@pobox.com" className={styles.introBtn}>
            Contact
          </a>
        </div>
      </section>
    </>
  );
}
