import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Section from './Section';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ProjectCardProps {
  title: string;
  type: string;
  languages: string;
  tools: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard = ({ title, type, languages, tools, description, link, image }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const winWidth = window.innerWidth;
  const [width, setWidth] = useState(
    winWidth < 1350 && winWidth > 1100
    ? 360 - Math.floor((1350 - winWidth) / 2)
    : winWidth > 400
    ? 360
    : 360 - Math.floor((400 - winWidth) / 2)
  );

  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth;

      setWidth(
        winWidth < 1350 && winWidth > 1100
        ? 360 - Math.floor((1350 - winWidth) / 2)
        : winWidth > 400
        ? 360
        : 360 - Math.floor((400 - winWidth) / 2)
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card style={{ width, overflow: 'hidden' }} raised>
      <div style={{ width, height: width, overflow: 'hidden' }}>
        <Parallax translateY={['-16%', '4%']}>
          <img
            style={{
              position: 'relative',
              left: '-10%',
              width: '120%',
            }}
            src={image}
            alt={title} />
        </Parallax>
      </div>

      <CardContent>
        <Typography variant='h2' style={{ margin: 0 }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions style={{ paddingLeft: '8px' }} disableSpacing>
        <Button
          href={link}
          variant='outlined'>
          Source Code on GitHub
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout={200} unmountOnExit>
        <CardContent style={{ paddingTop: '0px' }}>
          <hr />
          <Typography>
            Type: {type}<br />
            Languages: {languages}<br />
            Tools: {tools}<br />
            <br />
            Description:<br />
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const ProgrammingProjects = () => {
  return (
    <Section heading='Programming Projects'>
      <Typography>
        Some of my notable programming projects, the source codes are all on <Link underline='hover' href='https://github.com/LioQing'>my GitHub page</Link>.
      </Typography>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: '32px 32px',
        margin: '32px auto',
        padding: 0,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '32px',
          padding: 0,
        }}>
          <ProjectCard
            title='The Tank Arena'
            type='Game'
            languages='C++'
            tools='SFML'
            description='Inspired by the Wii tank game, this is a summary of what I know about video game programming as I coded the entity, texture, physics and more components by myself.'
            link='https://github.com/LioQing/The-Tank-Arena'
            image={`${process.env.PUBLIC_URL}/images/the-tank-arena.png`} />
          <ProjectCard
            title='Tiny Terminal User Interface'
            type='TUI Library'
            languages='C++'
            tools='Linux System Libraries'
            description='A lightweight TUI library I wrote to assist in my university project. Used many Linux library features for terminal input and output.'
            link='https://github.com/LioQing/ttui'
            image={`${process.env.PUBLIC_URL}/images/ttui.png`} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '32px',
          padding: 0,
        }}>
          <ProjectCard
            title='Everything Daily'
            type='Utility Desktop Application'
            languages='C#'
            tools='UWP, WinUI'
            description='A Windows application for me to record my daily activities where I can create activity type, add records, delete records all using the app.'
            link='https://github.com/LioQing/Everything-Daily'
            image={`${process.env.PUBLIC_URL}/images/everything-daily.png`} />
          <ProjectCard
            title='Web Portfolio'
            type='Utility Desktop Application'
            languages='TypeScript'
            tools='React, MUI'
            description='It is this website. This is the first web project I did after I started learning web development frameworks and TypeScript.'
            link='https://github.com/LioQing/web-portfolio'
            image={`${process.env.PUBLIC_URL}/images/LioQing-half.png`} />
        </div>
      </div>
    </Section>
  );
};

export default ProgrammingProjects;