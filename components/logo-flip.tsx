/**
 *
 * @constructor
 */
export function LogoFlip() {
  let dom: Document | undefined;

  if (typeof window !== 'undefined') {
    dom = window.document;
  }

  (function(dom) {
    if (!dom) return;
    const logo = dom.querySelector('.long-shadow-logo');

    const toggleClass = function toggleClass(className, newClass) {
      if (className.search(newClass) !== -1) {
        return className.replace(newClass, '').replace('  ', ' ');
      } else {
        return [className, newClass].join(' ');
      }
    };

    const handleHover = function handleHover() {
      // eslint-disable-next-line no-invalid-this
      this.className = toggleClass(this.className, 'hover');
    };

    logo.addEventListener('mouseenter', handleHover);
    logo.addEventListener('mouseleave', handleHover);
  })(dom);

  return (
    <div className="long-shadow-logo">
      <div className="flipper">
        <div className="front content">
          <a href="https://github.com/ffffranklin" target="_blank" rel="noreferrer">
            <img alt="Franklin Clark Logo" src="img/logo-ffff-shadow.svg"/>
          </a>
        </div>
        <div className="back content">
          <a href="https://github.com/ffffranklin" target="_blank" rel="noreferrer">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 110 110"
              xmlSpace="preserve"
              width="110px">
              <defs>
                <circle id="circle" cx="55" cy="55" r="55"></circle>
              </defs>
              <clipPath id="clip">
                <use xlinkHref="#circle" overflow="visible"></use>
              </clipPath>
              <g clipPath="url(#clip)">
                <image
                  overflow="visible"
                  width="110"
                  height="110"
                  xlinkHref="https://avatars2.githubusercontent.com/u/1546561?v=3&amp;s=110"></image>
              </g>
            </svg>

          </a>
        </div>
      </div>
    </div>
  );
}
