import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircleIcon from '@mui/icons-material/Circle';
import Section from './Section';

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

const DynamicColumnList = ({ items, width }: { items: string[], width: number }) => {
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
          {column.map((item, j) => (
            <BulletItem key={j}>{item}</BulletItem>
          ))}
        </List>
      ))}
    </Container>
  );
};

const ComputerSkills = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const languages = [
    'Python',
    'C++',
    'SQL',
    'Java',
    'Rust',
    'C#',
    'JavaScript/TypeScript',
    'HTML',
    'CSS',
  ];

  const databases = [
    'PostgreSQL',
    'MySQL',
    'Cassandra',
  ];

  const technologies = [
    'Git',
    'Django',
    'Docker',
    'Microsoft Azure',
    'Google Cloud',
    'React',
  ];

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

      <Typography variant='h2'>Databases</Typography>
      <List>
        {databases.map((item, i) => (
          <BulletItem key={i}>{item}</BulletItem>
        ))}
      </List>

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