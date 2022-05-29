import { useEffect } from 'react';
import Body from './Body';
import CycleList from './CycleList';

const GraphicDesign = () => {
  useEffect(() => {
    new Image().src = `${process.env.PUBLIC_URL}/images/bio-soc.png`;
    new Image().src = `${process.env.PUBLIC_URL}/images/comp-soc.png`;
  });

  const style = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 12,
    boxShadow: '0px 0px 16px #00000044',
  };

  return (
    <Body heading='Graphic Design'>
      <p>
        I also have a passion for graphic design. I have done logo and poster design for several school clubs and on my own in the past.
      </p>
      <CycleList items={[
        {
          title: 'St. Paul\'s College Computer Society Logo',
          description: 'I designed the logo for the Computer Society at St. Paul\'s College in 2019 as a part of the society\'s committee. The primary color being blue which often represents technology and the computer in the logo indicate what the society does.',
          component: <img
            style={style}
            src={`${process.env.PUBLIC_URL}/images/comp-soc.png`}
            alt='Computer Society Logo' />
        },
        {
          title: 'St. Paul\'s College Biology Society Logo',
          description: 'I designed the logo for the Biology Society at St. Paul\'s College in 2019 as a part of the society\'s committee. The primary light green color gives a vivid and vibrant vibe to the logo, and the microscope and leaves represent science and nature respectively.',
          component: <img
            style={style}
            src={`${process.env.PUBLIC_URL}/images/bio-soc.png`}
            alt='Biology Society Logo' />
        },
        {
          title: 'St. Paul\'s College Robotics Team Logo',
          description: 'I helped the robotics team to design this logo in 2019. The robotic arm and gear show that robot is the main focus, and the orange color gives a cautious and industrial feeling to the logo.',
          component: <img
            style={style}
            src={`${process.env.PUBLIC_URL}/images/robotics.png`}
            alt='Robotics Team Logo' />
        },
        {
          title: 'Speed Cubing 3x3 World Record Poster',
          description: 'This is a poster I made as a tribute to the world record of the 3x3 speed cubing single of 4.221s by Feliks Zemdegs. Being a Rubik\'s Cube enthusiast, I wanted to show my admiration to all those who have worked hard to achieve this record.',
          component: <img
            style={style}
            src={`${process.env.PUBLIC_URL}/images/cubing-wr.png`}
            alt='Speed Cubing 3x3 World Record' />
        },
        {
          title: 'Solve Cube Poster',
          description: 'This is a wallpaper I made for my phone in 2018 when I was most obsessed with Rubik\'s Cube. Different from other artwork in this list, this is done by digital painting instead of vector arts.',
          component: <img
            style={style}
            src={`${process.env.PUBLIC_URL}/images/solve-it.png`}
            alt='Solve Cube Poster' />
        },
      ]} />
    </Body>
  )
};

export default GraphicDesign;