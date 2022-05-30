import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Theme, ThemeContext } from "./ThemeProvider";

interface Props {
  isSidebarShown: boolean,
  setIsSidebarShown: (isSidebarShown: boolean) => void,
}

const ControlButtons = ({ isSidebarShown, setIsSidebarShown }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Stack direction='row' spacing={1} style={{ margin: '52px 16px 0px 0px' }}>
      <Tooltip title='Toggle Sidebar' placement='top'>
        <IconButton onClick={() => setIsSidebarShown(!isSidebarShown)}>
          <MenuRoundedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Toggle Theme' placement='top'>
        <IconButton onClick={toggleTheme}>
          {theme === Theme.Dark ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ControlButtons;