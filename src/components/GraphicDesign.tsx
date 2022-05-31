import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Section from './Section';

const Artwork = ({ image, title, year }: { image: string, title: string, year: string }) => {
  return (
    <Container style={{ margin: '32px auto' }}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '12px auto',
        }}
        disableGutters>
        <Paper elevation={8} style={{ overflow: 'hidden' }}>
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              verticalAlign: 'middle',
            }}
            src={image}
            alt={title} />
        </Paper>
      </Container>
      <Typography variant='h2' style={{ margin: '0px 6px' }}>{title}</Typography>
      <Typography style={{ margin: '1px 6px' }}>{year}</Typography>
    </Container>
  );
};

const GraphicDesign = () => {
  return (
    <Section heading='Graphic Design'>
      <Typography>
        I also have a passion for graphic design. I have done logo and poster design for several school clubs and on my own in the past.
      </Typography>
      
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/comp-soc.png`}
        title={'St. Paul\'s College Computer Society Logo'}
        year='2020' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/bio-soc.png`}
        title={'St. Paul\'s College Biology Society Logo'}
        year='2020' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/robotics.png`}
        title={'St. Paul\'s College Robotics Team Logo'}
        year='2020' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/cubing-wr.png`}
        title='Speed Cubing 3x3 World Record Poster'
        year='2019' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/solve-it.png`}
        title='Solve Cube Poster'
        year='2018' />
    </Section>
  );
};

export default GraphicDesign;