// @ts-nocheck

import { useContext } from 'react';
import { Theme, themeColors, ThemeContext } from '../context/theme';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ToolTip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import '../styles.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  const Icon = theme === Theme.Light ? LightModeRoundedIcon : DarkModeRoundedIcon;

  return (
    <ToolTip title='Toggle Theme'>
      <IconButton
        sx={{
          position: 'fixed',
          top: 32,
          left: 96,
          width: 32,
          height: 32,
          color: themeColors[theme].color,
          transition: 'all 200ms ease',
        }}
        onClick={toggle}>
        <Icon />
      </IconButton>
    </ToolTip>
  );
};

export default ThemeToggle;