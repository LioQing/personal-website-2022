// @ts-nocheck

import { useContext } from 'react';
import { themeColors, ThemeContext } from '../context/theme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ToolTip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const SocialLinks = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: themeColors[theme].color,
    transition: 'all 200ms ease',
  };

  return (
    <>
      <ToolTip title='GitHub Profile'>
        <IconButton
          sx={style}
          href='https://github.com/LioQing'>
          <GitHubIcon fontSize='large' />
        </IconButton>
      </ToolTip>

      <ToolTip title='LinkedIn Profile'>
        <IconButton
          sx={style}
          href='https://www.linkedin.com/in/lioqyz'>
          <LinkedInIcon fontSize='large' />
        </IconButton>
      </ToolTip>
    </>
  );
};

export default SocialLinks;
