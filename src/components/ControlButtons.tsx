import { useState, useEffect, useContext } from 'react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import AppBar from '@mui/material/AppBar';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Theme, ThemeContext } from "../context/Theme";

const Container = ({ isPhone, children }: { isPhone: boolean, children: React.ReactNode }) => {
  if (isPhone) {
    return (
      <AppBar style={{ borderRadius: 0 }}>
        {children}
      </AppBar>
    );
  }

  return <>{children}</>;
};

interface Props {
  isSidebarShown: boolean,
  setIsSidebarShown: (isSidebarShown: boolean) => void,
  isPhone: boolean,
}

const ControlButtons = ({ isSidebarShown, setIsSidebarShown, isPhone }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isFirstPage, setIsFirstPage] = useState(window.scrollY < window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setIsFirstPage(window.scrollY < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container isPhone={isPhone}>
      <Stack direction='row' spacing={1} style={{ margin: isPhone ? '8px' : '32px 0px' }}>
        <Tooltip title='Toggle Sidebar'>
          <IconButton onClick={() => setIsSidebarShown(!isSidebarShown)}>
            <MenuRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Toggle Theme'>
          <IconButton onClick={toggleTheme}>
            {theme === Theme.Dark ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
          </IconButton>
        </Tooltip>
        <Fade in={!isFirstPage} timeout={200} unmountOnExit>
          <Tooltip title='Back to Top'>
            <IconButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <KeyboardArrowUpIcon style={{ transition: 'all 200ms ease' }} />
            </IconButton>
          </Tooltip>
        </Fade>
      </Stack>
    </Container>
  );
};

export default ControlButtons;