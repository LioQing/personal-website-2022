import { useEffect, useState } from 'react';
import Resources from './components/Resources';
import Sidebar from './components/Sidebar';
import NavList from './components/NavList';
import SidebarToggle from './components/SidebarToggle';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './components/ThemeContextProvider';
import Introduction from './components/Introduction';
import ComputerSkills from './components/ComputerSkills';
import ProgrammingProjects from './components/ProgrammingProjects';
import HorizLine from './components/HorizLine';
import Body from './components/Body';
import { Helmet } from 'react-helmet';
import { getThemeStyle, Theme } from './context/theme';
import { ReactComponent as DarkNameLogo } from './assets/LioQing.svg';
import { ReactComponent as LightNameLogo } from './assets/LioQing-white.svg';
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
      <ThemeContextProvider theme={theme} setTheme={setTheme}>
        <div style={{
          marginTop: 128,
          marginBottom: 72,
        }}>
          <Body>
            {theme === Theme.Dark
              ? <DarkNameLogo />
              : <LightNameLogo />
            }
          </Body>
        </div>

        <Sidebar isSidebarOpen={isSidebarOpen}>
          <NavList />
        </Sidebar>
        <SidebarToggle isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <ThemeToggle />

        <Introduction />
        <HorizLine />
        <ComputerSkills />
        <HorizLine />
        <ProgrammingProjects />

        <div style={{
          height: '40vh',
        }} />
      </ThemeContextProvider>
    </>
  );
};

export default App;
