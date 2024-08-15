import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import Section from './Section';

const LioQing = () => {
  const infoContainerStyle = {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'start',
    padding: 0,
    gap: '8px',
    margin: '8px 0px',
  } as React.CSSProperties;
  return (
    <Section heading='Lio Qing'>
      <Container style={infoContainerStyle}>
        <SchoolIcon /> <Typography>Occupation: Penultimate Undergraduate at the University of Hong Kong</Typography>
      </Container>
      <Container style={infoContainerStyle}>
        <BookIcon /> <Typography>Degrees: Bachelor of Engineering in Computer Science (BEng CompSc) &#38; Bachelor of Business Administration in Finance (BBA Fin)</Typography>
      </Container>
      <Container style={infoContainerStyle}>
        <PlaceIcon /> <Typography>Nationality: Hong Kong China</Typography>
      </Container>
      <Container style={infoContainerStyle}>
        <LanguageIcon /> <Typography>Languages: Chinese (Mandarin &#38; Cantonese), English</Typography>
      </Container>

      <Typography style={{ marginTop: '32px' }}>
        My Other Social Profiles:
      </Typography>
      <Container style={{ margin: '16px 0px' }} disableGutters>
        <Tooltip title='GitHub Profile'>
          <IconButton href='https://github.com/LioQing' style={{ margin: 'auto 4px'}}>
            <GitHubIcon fontSize='large' />
          </IconButton>
        </Tooltip>

        <Tooltip title='LinkedIn Profile'>
          <IconButton href='https://www.linkedin.com/in/lioqyz' style={{ margin: 'auto 4px'}}>
            <LinkedInIcon fontSize='large' />
          </IconButton>
        </Tooltip>
      </Container>
    </Section>
  );
};

export default LioQing;