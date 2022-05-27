// @ts-nocheck

import { useContext } from 'react';
import { Theme, ThemeContext } from '../context/theme';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import '../styles.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  const Icon = theme === Theme.Light ? LightModeRoundedIcon : DarkModeRoundedIcon;

  return (
    <>
      <Icon
        className='theme-toggle'
        onClick={toggle}
        tooltip='Toggle Theme'
      />
    </>
  );
};

export default ThemeToggle;