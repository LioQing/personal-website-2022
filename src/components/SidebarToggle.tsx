import { useContext } from 'react';
import { themeColors, ThemeContext } from '../context/theme';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ToolTip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import '../styles.css';

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const SidebarToggle = ({isSidebarOpen, setIsSidebarOpen}: Props) => {
  const { theme } = useContext(ThemeContext);

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ToolTip title='Toggle Sidebar'>
      <IconButton
        sx={{
          position: 'fixed',
          top: 32,
          left: 48,
          width: 32,
          height: 32,
          color: themeColors[theme].color,
          transition: 'all 200ms ease',
          '&:hover': {
            backgroundColor: themeColors[theme].hover,
          }
        }}
        onClick={toggle}>
        <MenuRoundedIcon sx={{
          width: 24,
          height: 24,
        }} />
      </IconButton>
    </ToolTip>
  );
};

export default SidebarToggle;