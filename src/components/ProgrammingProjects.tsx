import { useState, useEffect, useContext } from 'react';
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
import { ThemeContext } from "../context/Theme";

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
  date: string;
  techs: string;
  description: string;
  link: string;
  image: string;
  tryLink?: string;
}

const ProjectCard = ({ title, type, languages, date, techs, description, link, image, tryLink }: ProjectCardProps) => {
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
        <Typography variant='body2' style={{ margin: 0 }}>
          {date}
        </Typography>
      </CardContent>
      <CardActions style={{ paddingLeft: '16px' }} disableSpacing>
        <Button
          href={link}
          variant='outlined'>
          Source Code
        </Button>
        {tryLink
          ? <Button
            style={{ marginLeft: '8px' }}
            href={tryLink}
            variant='outlined'>
            Try It
          </Button>
          : null
        }
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
            Techs: {techs}<br />
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
  const { theme } = useContext(ThemeContext);

  return (
    <Section heading='Programming Projects'>
      <Typography>
        Some of my notable programming projects, the source code and demos are all on <Link underline='hover' href='https://github.com/LioQing'>my GitHub page</Link>.
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
            title='Chat Conductor'
            type='AI Pipeline Prototyping Web Application'
            languages='TypeScript, Python'
            date='Dec 2023'
            techs='Django, React, Docker, PostgreSQL, Microsoft Azure, Google Cloud'
            description='A web application for simple containerized generative AI pipeline prototyping, with support for popular services such as OpenAI ChatGPT, Google Gemini Pro.'
            link='https://github.com/LioQing/chat-conductor'
            image={`${process.env.PUBLIC_URL}/images/chat-conductor.png`}
            tryLink='http://chat-conductor.lioqing.com' />
          <ProjectCard
            title='Race AI'
            type='Machine Learning Project'
            languages='Python'
            date='Apr 2023'
            techs='PyGame, NumPy'
            description='A study project after my completion of the Machine Learning specialization certificate to solidify my knowledge. Implement self-learning AI drivers without additional help of any machine learning library.'
            link='https://github.com/LioQing/RaceAI'
            image={`${process.env.PUBLIC_URL}/images/race-ai.png`} />
          <ProjectCard
            title='Everything Daily'
            type='Utility Desktop Application'
            languages='C#'
            date='Jan 2022'
            techs='UWP, WinUI'
            description='A Windows application for me to record my daily activities where I can create activity type, add records, delete records all using the app.'
            link='https://github.com/LioQing/Everything-Daily'
            image={`${process.env.PUBLIC_URL}/images/everything-daily.png`} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '32px',
          padding: 0,
        }}>
          <ProjectCard
            title='Code Shelf'
            type='Visualization Focused Tutorial Site'
            languages='Python, JavaScript, TypeScript, Markdown'
            date='Aug 2023'
            techs='Manim, Docusaurus'
            description='A coding tutorial site I created for learning computer science concepts, with animations and interactive components for better learning experience.'
            link='https://github.com/LioQing/code-shelf'
            image={`${process.env.PUBLIC_URL}/images/code-shelf-${theme}.png`}
            tryLink='https://lioqing.com/code-shelf' />
          <ProjectCard
            title='Delivery in a Hearbeat'
            type='Browser Game'
            languages='C#'
            date='Apr 2023'
            techs='Unity'
            description='A game made in Unity for a game jam. I led my team with me, and made this game in 48 hours.'
            link='https://github.com/LioQing/delivery-in-a-heartbeat'
            image={`${process.env.PUBLIC_URL}/images/delivery-in-a-heartbeat.png`}
            tryLink='https://lio-qing.itch.io/delivery-in-a-heartbeat' />
          <ProjectCard
            title='The Tank Arena'
            type='Game'
            languages='C++'
            date='Jul 2021'
            techs='SFML'
            description='A game built in a custom game engine with an architecture optimized for data intensive calculation. Implement all components including AI, level, physics from scratch with a single graphics library SFML.'
            link='https://github.com/LioQing/The-Tank-Arena'
            image={`${process.env.PUBLIC_URL}/images/the-tank-arena.png`} />
        </div>
      </div>
    </Section>
  );
};

export default ProgrammingProjects;