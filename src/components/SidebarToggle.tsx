// @ts-nocheck

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import '../styles.css';

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const SidebarToggle = ({isSidebarOpen, setIsSidebarOpen}: Props) => {
  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <MenuRoundedIcon
        className='sidebar-toggle'
        onClick={toggle}
        tooltip='Toggle Sidebar'
      />
    </>
  );
};

export default SidebarToggle;