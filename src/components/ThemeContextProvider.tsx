import { Theme, ThemeContext } from '../context/theme';

interface Props {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  children: React.ReactNode;
}

const ThemeContextProvider = ({ theme, setTheme, children }: Props) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;