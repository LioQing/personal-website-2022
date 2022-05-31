import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Container from '@mui/material/Container';
import UselessContainer from './components/UselessContainer';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import ThemeProvider from './components/ThemeProvider';
import ControlButtons from './components/ControlButtons';
import HorizLine from './components/HorizLine';
import Sidebar from './components/Sidebar';
import NameLogo from './components/NameLogo';
import LioQing from './components/LioQing';
import ComputerSkills from './components/ComputerSkills';
import ProgrammingProjects from './components/ProgrammingProjects';
import GraphicDesign from './components/GraphicDesign';

const App = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  return (
    <ThemeProvider>
      <ParallaxProvider>
        <CssBaseline />

        <Stack style={{
          position: 'fixed',
          margin: '0px 36px',
          zIndex: 1,
        }}>
          {/* sidebar toggle, theme toggle, back to top button */}
          <ControlButtons isSidebarShown={isSidebarShown} setIsSidebarShown={setIsSidebarShown} />

          {/* sidebar */}
          {
            <Fade in={isSidebarShown} timeout={200} easing='ease'>
              <UselessContainer>
                <Slide direction="right" in={isSidebarShown} timeout={200} easing='ease' mountOnEnter unmountOnExit>
                  <UselessContainer>
                    <Sidebar />
                  </UselessContainer>
                </Slide>
              </UselessContainer>
            </Fade>
          }
        </Stack>

        {/* main content */}
        <Container maxWidth='md' style={{ marginBottom: '25vh' }}>
          <NameLogo />
          <LioQing />
          <HorizLine />
          <ComputerSkills />
          <HorizLine />
          <ProgrammingProjects />
          <HorizLine />
          <GraphicDesign />
          <HorizLine />
        </Container>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
