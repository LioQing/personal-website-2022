import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

const Sidebar = () => {
  const Headings: Array<string> = [
    'Lio Qing',
    'Computer Skills',
    'Programming Projects',
    'Graphic Design',
  ];
  
  const getCurrHeading = () => {
    for (const [i, h] of Headings.entries()) {
      const elem = document.getElementById(h);

      if (elem === null) {
        console.error(`Heading ${h} not found.`);
        continue;
      }

      const rect = elem.getBoundingClientRect();

      if (rect && rect.y + rect.height > 0) {
        return Headings[i];
      }
    }
    return Headings[0];
  };

  const [currHeading, setCurrHeading] = useState(getCurrHeading());

  const updateCurrHeading = () => {
    setCurrHeading(getCurrHeading());
  };

  window.addEventListener('scroll', () => {
    updateCurrHeading();
  });

  return (
    <List style={{ margin: 0, padding: 0, width: '200px' }}>
      {Headings.map(h => (
        <ListItemButton
          key={h}
          style={{
            margin: '8px auto',
            borderRadius: '8px',
            transition: 'all 300ms ease',
          }}
          selected={currHeading === h}
          onClick={() => {
            window.location.href = `#${h}`;
            window.scrollBy(0, -32);
          }}>
          {h}
        </ListItemButton>
      ))}
    </List>
  );
};

export default Sidebar;