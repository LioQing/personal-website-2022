import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  const winWidth = window.innerWidth;
  
  const [width, setWidth] = useState<'none' | number>(
    winWidth > 1350
    ? 900
    : winWidth > 1000
    ? winWidth - 504 // 504 is the width of 2 sidebar
    : 'none'
  );

  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth;

      setWidth(
        winWidth > 1350
        ? 900
        : winWidth > 1000
        ? winWidth - 504 // 504 is the width of 2 sidebar
        : 'none'
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container style={{ marginBottom: '25vh', maxWidth: width }}>
      {children}
    </Container>
  );
};

export default MainContainer;