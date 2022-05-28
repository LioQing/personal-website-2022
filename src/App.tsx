import { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Resources from './components/Resources';
import NameLogo from './components/NameLogo';
import Sidebar from './components/Sidebar';
import NavList from './components/NavList';
import SidebarToggle from './components/SidebarToggle';
import ThemeToggle from './components/ThemeToggle';
import BackToTopButton from './components/BackToTopButton';
import ThemeContextProvider from './components/ThemeContextProvider';
import Introduction from './components/Introduction';
import ComputerSkills from './components/ComputerSkills';
import ProgrammingProjects from './components/ProgrammingProjects';
import HorizLine from './components/HorizLine';
import Body from './components/Body';
import { Helmet } from 'react-helmet';
import { getThemeStyle, Theme } from './context/theme';
import './styles.css';

const App = () => {
  const [theme, setTheme] = useState(Theme.Dark);
  const [style, setStyle] = useState(getThemeStyle(theme));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setStyle(getThemeStyle(theme));
  }, [theme]);

  return (
    <>
      <Helmet>
        <Resources />
        <style>{style}</style>
      </Helmet>
      <ParallaxProvider>
        <ThemeContextProvider theme={theme} setTheme={setTheme}>
          <Body>
            <Parallax translateY={[-25, 25]}>
              <div style={{
                position: 'relative',
                height: '100vh',
              }}>
                <NameLogo theme={theme}/>
              </div>
            </Parallax>
          </Body>

          <Sidebar isSidebarOpen={isSidebarOpen}>
            <NavList />
          </Sidebar>
          <SidebarToggle isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <ThemeToggle />
          <BackToTopButton />

          <Introduction />
          <HorizLine />
          <ComputerSkills />
          <HorizLine />
          <ProgrammingProjects />

          <div style={{
            height: '40vh',
          }} />
        </ThemeContextProvider>
      </ParallaxProvider>
    </>
  );
};

export default App;
