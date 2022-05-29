import { useEffect } from 'react';
import Body from './Body';
import ArtDisplay from './ArtDisplay';

const GraphicDesign = () => {
  useEffect(() => {
    new Image().src = `${process.env.PUBLIC_URL}/images/bio-soc.png`;
    new Image().src = `${process.env.PUBLIC_URL}/images/comp-soc.png`;
  });

  return (
    <Body heading='Graphic Design'>
      <p>
        I also have a passion for graphic design. I have done logo and poster design for several school clubs and on my own in the past.
      </p>
      <ArtDisplay 
        src={`${process.env.PUBLIC_URL}/images/comp-soc.png`}
        title={'St. Paul\'s College Computer Society Logo'}
        year='2019' />
      <ArtDisplay 
        src={`${process.env.PUBLIC_URL}/images/bio-soc.png`}
        title={'St. Paul\'s College Biology Society Logo'}
        year='2019' />
      <ArtDisplay 
        src={`${process.env.PUBLIC_URL}/images/robotics.png`}
        title={'St. Paul\'s College Robotics Team Logo'}
        year='2019' />
      <ArtDisplay 
        src={`${process.env.PUBLIC_URL}/images/cubing-wr.png`}
        title='Speed Cubing 3x3 World Record Poster'
        year='2018' />
      <ArtDisplay 
        src={`${process.env.PUBLIC_URL}/images/solve-it.png`}
        title='Solve Cube Poster'
        year='2018' />
    </Body>
  )
};

export default GraphicDesign;