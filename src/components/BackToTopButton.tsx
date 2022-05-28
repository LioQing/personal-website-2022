// @ts-nocheck

import { useContext } from 'react';
import { themeColors, ThemeContext } from '../context/theme';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ToolTip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import '../styles.css';

const BackToTopButton = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ToolTip title='Back to Top'>
      <IconButton
        sx={{
          position: 'fixed',
          top: 32,
          left: 144,
          width: 32,
          height: 32,
          color: themeColors[theme].color,
          transition: 'all 200ms ease',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </ToolTip>
  );
};

export default BackToTopButton;