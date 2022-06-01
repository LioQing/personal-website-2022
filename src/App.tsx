import { ParallaxProvider } from 'react-scroll-parallax';
import CssBaseline from '@mui/material/CssBaseline';
import MainContainer from './components/MainContainer';
import ThemeProvider from './components/ThemeProvider';
import Controls from './components/Controls';
import HorizLine from './components/HorizLine';
import NameLogo from './components/NameLogo';
import LioQing from './components/LioQing';
import ComputerSkills from './components/ComputerSkills';
import ProgrammingProjects from './components/ProgrammingProjects';
import GraphicDesign from './components/GraphicDesign';

const App = () => {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <CssBaseline />

        {/* control buttons, sidebar */}
        <Controls />

        {/* main content */}
        <MainContainer>
          <NameLogo />
          <LioQing />
          <HorizLine />
          <ComputerSkills />
          <HorizLine />
          <ProgrammingProjects />
          <HorizLine />
          <GraphicDesign />
          <HorizLine />
        </MainContainer>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
