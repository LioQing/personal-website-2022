import { createContext } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const themeColors = {
  [Theme.Light]: {
    background: '#eeeeee',
    frontBackground: '#dddddd',
    color: '#000000',
    accent: '#1ED954',
  },
  [Theme.Dark]: {
    background: '#222222',
    frontBackground: '#333333',
    color: '#ffffff',
    accent: '#23ff7f',
  },
}

export const getThemeStyle = (theme: Theme): string => {
  const defaultStyles = `
  h1 {
    font-family: 'Open Sans';
    color: ${themeColors[theme].accent};
    margin: 0;
  }

  h2 {
    font-family: 'Open Sans';
    font-size: 1.2rem;
  }

  li {
    font-family: 'Open Sans';
    font-size: 1.1rem;
  }
  
  p {
    font-family: 'Open Sans';
    font-size: 1.1rem;
  }
  
  a {
    font-family: 'Open Sans';
    color: ${themeColors[theme].accent};
    font-style: italic;
    text-decoration: none;
  }
  
  a:hover {
    font-family: 'Open Sans';
    text-decoration: underline;
  }
  
  .nav-button {
    color: ${themeColors[theme].color};
  }
  
  .nav-button-active {
    background-color: ${themeColors[theme].color};
    color: ${themeColors[theme].background};
  }

  .nav-button:hover {
    color: ${themeColors[theme].color};
    text-decoration: underline;
  }
  
  .nav-button-active:hover {
    background-color: ${themeColors[theme].color};
    color: ${themeColors[theme].background};
    text-decoration: underline;
  }`;

  return `
    body {
      background-color: ${themeColors[theme].background};
      color: ${themeColors[theme].color};
      transition: all 200ms ease;
    }` + defaultStyles;
};

export const ThemeContext = createContext({
  theme: Theme.Dark,
  setTheme: (_: Theme) => {},
});