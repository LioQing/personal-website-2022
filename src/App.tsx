import { useEffect, useState } from 'react';
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
        <style>{`
          @font-face {
            font-family: 'Open Sans';
            src: url('${process.env.PUBLIC_URL}/fonts/OpenSans.ttf') format('truetype');
          }`}
        </style>
        <style>{style}</style>
      </Helmet>
      <ThemeContextProvider theme={theme} setTheme={setTheme}>
        <div style={{
          height: '72px',
        }} />

        <Body>
          {theme === Theme.Dark
            ? <DarkNameLogo />
            : <LightNameLogo />
          }
        </Body>

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
