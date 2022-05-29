import { useState } from 'react';
import NavButton from './NavButton';

const NavList = () => {
  const HEADINGS: Array<string> = [
    'Lio Qing Yanzhang',
    'Computer Skills',
    'Programming Projects',
  ];

  const getCurrHeading = () => {
    for (const [i, h] of HEADINGS.entries()) {
      const elem = document.getElementById(h);
      const rect = elem?.getBoundingClientRect();
      if (rect && rect.y + rect.height > 0) {
        return HEADINGS[i];
      }
    }
    return HEADINGS[0];
  };

  const [currHeading, setCurrHeading] = useState(getCurrHeading());

  const updateCurrHeading = () => {
    setCurrHeading(getCurrHeading());
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