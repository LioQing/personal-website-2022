import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import OpenSans from '../assets/OpenSans.ttf';
import { Theme, ThemeContext } from '../context/Theme';

const defaultMuiTheme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Open Sans';
          src: url(${OpenSans}) format('truetype');
        }

        body {
          transition: all 300ms ease;
        }
      `,
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontStyle: 'italic',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '2.4rem',
      fontWeight: 900,
      margin: '32px auto',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 700,
      margin: '24px auto',
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
};

export const muiThemes = {
  [Theme.Light]: createTheme({
    ...defaultMuiTheme,
    typography: {
      ...defaultMuiTheme.typography,
      h1: {
        ...defaultMuiTheme.typography.h1,
        color: '#19b344',
      },
    },
    palette: {
      primary: {
        light: '#1ed952',
        main: '#19b344',
        dark: '#118030',
      },
      background: {
        default: '#eeeeee',
        paper: '#ffffff',
      },
    },
  }),
  [Theme.Dark]: createTheme({
    ...defaultMuiTheme,
    typography: {
      ...defaultMuiTheme.typography,
      h1: {
        ...defaultMuiTheme.typography.h1,
        color: '#22fc5e',
      },
    },
    palette: {
      primary: {
        light: '#22ff8d',
        main: '#23ff7f',
        dark: '#1bcc65',
      },
      background: {
        default: '#222222',
        paper: '#121212',
      },
      mode: 'dark',
    },
  }),
};

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(Theme.Dark);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light) }}>
      <MuiThemeProvider theme={muiThemes[theme]}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;