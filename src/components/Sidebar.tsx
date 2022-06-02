import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import UselessContainer from './UselessContainer';

interface Props {
  isSidebarShown: boolean;
  setIsSidebarShown: (isSidebarShown: boolean) => void;
  isPhone: boolean;
}

const Sidebar = ({ isSidebarShown, setIsSidebarShown, isPhone }: Props) => {
  const Headings: Array<string> = [
    'Lio Qing',
    'Computer Skills',
    'Programming Projects',
    'Graphic Design',
  ];

  const [currHeading, setCurrHeading] = useState(Headings[0]);

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

  useEffect(() => {
    const updateCurrHeading = () => {
      setCurrHeading(getCurrHeading());
    };
  
    window.addEventListener('scroll', updateCurrHeading);
    return () => window.removeEventListener('scroll', updateCurrHeading);
  });

  if (isPhone) {
    return (
      <Slide
        direction='down'
        in={isSidebarShown}
        timeout={200}
        easing='ease'
        unmountOnExit>
        <UselessContainer style={{
          position: 'fixed',
          top: 56,
          width: '100%'
        }}>
          <Paper style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} elevation={2}>
            <List>
              {Headings.map(h => (
                <ListItemButton
                  key={h}
                  style={{
                    transition: 'all 300ms ease',
                  }}
                  selected={currHeading === h}
                  onClick={() => {
                    window.location.href = `#${h}`;
                    window.scrollBy(0, -88);
                    setIsSidebarShown(false);
                  }}>
                  {h}
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </UselessContainer>
      </Slide>
    );
  }

  return (
    <Fade in={isSidebarShown} timeout={200} easing='ease'>
      <UselessContainer>
        <Slide direction="right" in={isSidebarShown} timeout={200} easing='ease' mountOnEnter unmountOnExit>
          <UselessContainer>
            <List style={{ margin: 0, padding: 0, width: '180px' }}>
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
          </UselessContainer>
        </Slide>
      </UselessContainer>
    </Fade>
  );
};

export default Sidebar;