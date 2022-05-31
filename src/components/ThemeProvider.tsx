import { useState, createContext } from 'react';
import { createTheme } from '@mui/material/styles';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import OpenSans from '../assets/OpenSans.ttf';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          transition: 'all 300ms ease',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontStyle: 'italic',
          transition: 'all 300ms ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 300ms ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 300ms ease',
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
      transition: 'all 300ms ease',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 700,
      margin: '24px auto',
      transition: 'all 300ms ease',
    },
    body1: {
      fontSize: '1.1rem',
      transition: 'all 300ms ease',
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
      },
      mode: 'dark',
    },
  }),
};

export const ThemeContext = createContext({
  theme: Theme.Light,
  toggleTheme: () => {},
});

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