import { useState, useEffect, useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircleIcon from '@mui/icons-material/Circle';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import CplusplusOriginal from 'devicons-react/lib/icons/CplusplusOriginal';
import AzuresqldatabaseOriginal from 'devicons-react/lib/icons/AzuresqldatabaseOriginal';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import RustOriginal from 'devicons-react/lib/icons/RustOriginal';
import CsharpOriginal from 'devicons-react/lib/icons/CsharpOriginal';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import HaskellOriginal from 'devicons-react/lib/icons/HaskellOriginal';
import GitOriginal from 'devicons-react/lib/icons/GitOriginal';
import DjangoPlain from 'devicons-react/lib/icons/DjangoPlain';
import DockerOriginal from 'devicons-react/lib/icons/DockerOriginal';
import AzureOriginal from 'devicons-react/lib/icons/AzureOriginal';
import GooglecloudOriginal from 'devicons-react/lib/icons/GooglecloudOriginal';
import DotnetcoreOriginal from 'devicons-react/lib/icons/DotnetcoreOriginal';
import Section from './Section';
import { ThemeContext } from "../context/Theme";

const BulletItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ListItem>
        <CircleIcon style={{ margin: 'auto 1rem', width: '0.5rem', height: '0.5rem' }} />
        <Typography>
          {children}
        </Typography>
      </ListItem>
    </div>
  );
};

const DynamicColumnList = ({ items, width }: { items: [React.ReactNode | null, string][], width: number }) => {
  const columnCount = width < 400 ? 1 : width < 600 ? 2 : 3;
  const columnItemCount = Math.ceil(items.length / columnCount);

  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push(items.slice(i * columnItemCount, (i + 1) * columnItemCount));
  }

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      disableGutters >
      {columns.map((column, i) => (
        <List key={i}>
          {column.map(([lead, item], j) => (
            <ListItem key={j}>
              {lead}
              <Typography style={{ marginLeft: '8px' }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      ))}
    </Container>
  );
};

const ComputerSkills = () => {
  const { theme } = useContext(ThemeContext);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const languages = [
    [<PythonOriginal size={36} />, 'Python'],
    [<CplusplusOriginal size={36} />, 'C++'],
    [<AzuresqldatabaseOriginal size={36} />, 'SQL'],
    [<JavaOriginal size={36} />, 'Java'],
    [<RustOriginal size={36} fill={theme === 'light' ? undefined : 'white'} />, 'Rust'],
    [<CsharpOriginal size={36} />, 'C#'],
    [<TypescriptOriginal size={36} />, 'TypeScript'],
    [<Html5Original size={36} />, 'HTML'],
    [<HaskellOriginal size={36} />, 'Haskell'],
  ] as [React.ReactNode | null, string][];

  const technologies = [
    [<GitOriginal size={36} />, 'Git'],
    [<DjangoPlain size={36} />, 'Django'],
    [<DockerOriginal size={36} />, 'Docker'],
    [<AzureOriginal size={36} />, 'Microsoft Azure'],
    [<GooglecloudOriginal size={36} />, 'Google Cloud'],
    [<DotnetcoreOriginal size={36} />, 'ASP.NET Core'],
  ] as [React.ReactNode | null, string][];

  const softwares = [
    'Editing - Photoshop, Illustrator, Premiere Pro',
    'Office - Word, Excel, PowerPoint',
    'Coding - Visual Studio, Visual Studio Code, Rider, CLion, Intellij IDEA, PyCharm',
    'Modelling - Blender',
  ];

  return (
    <Section heading='Computer Skills'>
      <Typography>
        An overview of my computer skills including computer languages, software development technologies, and computer softwares I have worked with.
      </Typography>
      
      <Typography variant='h2'>Computer Languages</Typography>
      <DynamicColumnList items={languages} width={viewportWidth} />

      <Typography variant='h2'>Software Development Technologies</Typography>
      <DynamicColumnList items={technologies} width={viewportWidth} />

      <Typography variant='h2'>Computer Softwares</Typography>
      <List>
        {softwares.map((item, i) => (
          <BulletItem key={i}>{item}</BulletItem>
        ))}
      </List>
    </Section>
  );
};

export default ComputerSkills;