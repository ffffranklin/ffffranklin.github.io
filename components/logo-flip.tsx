import styles from './logo-flip.module.scss';
import Image from 'next/image';
import { useState } from 'react';

/**
 *
 * @constructor
 */
export function LogoFlip() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={[styles.longShadowLogo, isActive ? 'hover' : null].join(' ')} onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
      <div className={styles.flipper}>
        <div className={[styles.front, 'content'].join(' ')}>
          <a href="https://github.com/ffffranklin" target="_blank" rel="noreferrer">
            <Image height={110} width={110} alt="Franklin Clark Logo" src="/img/logo-ffff-shadow.svg"/>
          </a>
        </div>
        <div className={[styles.back, 'content'].join(' ')}>
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
