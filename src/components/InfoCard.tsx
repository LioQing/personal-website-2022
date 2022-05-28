import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../styles.css';

interface Props {
  title: string,
  imageSrc: string,
  children?: React.ReactNode,
}

const InfoCard = ({ title, imageSrc, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        margin: '12px auto',
      }}
      onPointerEnter={() => setIsOpen(true)}
      onPointerLeave={() => setIsOpen(false)}>
      <div className='info-card-image-frame'>
        <Parallax translateY={[-12, 12]}>
          <img 
            src={imageSrc}
            alt={title}
            style={{
              position: 'relative',
              // 320 is the width of card
              left: (-364+320)/2,
              top: (-364+320)/2,
              width: 364,
              height: 364,
              verticalAlign: 'middle', 
              filter: isOpen ? 'blur(4px)' : 'blur(0px)',
              transition: 'all 200ms ease',
            }} />
        </Parallax>
      </div>
      <div className={isOpen
        ? 'info-card-overlay-opened'
        : 'info-card-overlay-closed'
      }>
        <div>
          <h2 style={{ margin: '0.7rem auto' }}>{title}</h2>
          {isOpen ? children : null}
        </div>
      </div>
    </div>
  )
};

export default InfoCard;