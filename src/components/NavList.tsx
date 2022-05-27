import { useState } from 'react';
import NavButton from './NavButton';

const NavList = () => {
  const HEADINGS: Array<string> = [
    'Lio Qing Yanzhang',
    'Computer Skills',
    'Programming Projects',
  ];

  const [currHeading, setCurrHeading] = useState(HEADINGS[0]);

  const updateCurrHeading = () => {
    for (const [i, h] of HEADINGS.entries()) {
      const elem = document.getElementById(h);
      const rect = elem?.getBoundingClientRect();
      if (rect && rect.y + rect.height > 0) {
        setCurrHeading(HEADINGS[i]);
        break;
      }
    }
  };

  window.addEventListener('scroll', () => {
    updateCurrHeading();
  });

  return (
    <div>
      {HEADINGS.map(heading => (
        <div
          key={heading}
          style={{
            marginTop: '1rem',
          }}>
          <NavButton
            heading={heading}
            isCurr={heading === currHeading}
          />
        </div>
      ))}
    </div>
  );
};

export default NavList;