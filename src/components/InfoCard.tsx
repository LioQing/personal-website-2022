import { useState } from 'react';
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
      <div style={{
        overflow: 'hidden',
        borderRadius: 12,
        boxShadow: '0px 0px 10px #00000088',
      }}>
        <img 
          src={imageSrc}
          alt={title}
          style={{
            width: '100%',
            verticalAlign: 'middle', 
            filter: isOpen ? 'blur(4px)' : 'blur(0px)',
            transition: 'all 200ms ease',
          }} />
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