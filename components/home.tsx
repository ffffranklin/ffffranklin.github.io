import './home.module.scss';
/**
 *
 * @constructor
 */
export function Home() {
  return (
    <>
      <section className="intro row">
        <div className="wrapper small-12 medium-7 medium-centered columns">
          <h1>Franklin Clark</h1>
          <p className="content">
            Looks like you're a little early! My site is still being built. In
            the meantime check out my work on
            <a href="https://github.com/ffffranklin" target="_blank" rel="noreferrer">GitHub</a> or
            <a href="http://codepen.io/ffffranklin" target="_blank" rel="noreferrer">CodePen</a>
            and follow me on
            <a href="https://twitter.com/_ffffranklin" target="_blank" rel="noreferrer">Twitter</a>.
          </p>
        </div>
      </section>
      <section className="contact row">
        <div className="wrapper columns medium-centered medium-2">
          <a href="mailto:ffffranklin@pobox.com" className="btn btn-primary btn-grid">
            Contact
          </a>
        </div>
      </section>
    </>
  );
}
