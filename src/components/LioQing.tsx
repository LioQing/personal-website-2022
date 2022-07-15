import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Section from './Section';

const LioQing = () => {
  return (
    <Section heading='Lio Qing'>
      <Typography>
        Current Education: Undergraduate at the University of Hong Kong<br />
        Nationality: Hong Kong China<br />
        Languages: Chinese (Mandarin &#38; Cantonese), English
      </Typography>

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