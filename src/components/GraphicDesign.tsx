import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Section from './Section';

const Artwork = ({ image, title, subtitle }: { image: string, title: string, subtitle: string }) => {
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
      <Typography style={{ margin: '1px 6px' }}>{subtitle}</Typography>
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
        subtitle='2020, made with Illustrator' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/bio-soc.png`}
        title={'St. Paul\'s College Biology Society Logo'}
        subtitle='2020, made with Illustrator' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/robotics.png`}
        title={'St. Paul\'s College Robotics Team Logo'}
        subtitle='2020, made with Illustrator' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/cubing-wr.png`}
        title='Speed Cubing 3x3 World Record Poster'
        subtitle='2019, made with Illustrator' />
      <Artwork 
        image={`${process.env.PUBLIC_URL}/images/solve-it.png`}
        title='Solve Cube Poster'
        subtitle='2018, made with SAI and Photoshop' />
    </Section>
  );
};

export default GraphicDesign;