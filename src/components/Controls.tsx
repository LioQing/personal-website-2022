import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import ControlButtons from './ControlButtons';
import Sidebar from './Sidebar';

const Controls = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const [isPhone, setIsPhone] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Stack style={{
      position: 'fixed',
      width: isPhone ? '100%' : 'auto',
      margin: isPhone ? '0px' : '0px 36px',
      zIndex: 1,
    }}>
      {/* sidebar toggle, theme toggle, back to top button */}
      <ControlButtons isSidebarShown={isSidebarShown} setIsSidebarShown={setIsSidebarShown} isPhone={isPhone} />

      {/* sidebar */}
      <Sidebar isSidebarShown={isSidebarShown} setIsSidebarShown={setIsSidebarShown} isPhone={isPhone} />
    </Stack>
  );
};

export default Controls;