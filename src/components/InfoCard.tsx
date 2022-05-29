import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useContext } from 'react';
import { themeColors, ThemeContext } from '../context/theme';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../styles.css';

interface Props {
  title: string,
  imageSrc: string,
  link: string,
  children?: React.ReactNode,
}

const InfoCard = ({ title, imageSrc, link, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        borderRadius: 12,
        width: 325,
        margin: '12px auto',
        backgroundColor: themeColors[theme].frontBackground,
      }}>
      <div style={{
        height: 325,
        overflow: 'hidden',
      }}>
        <Parallax translateY={[-10, 10]}>
          <img
            src={imageSrc}
            alt={title}
            style={{
              position: 'relative',
              width: '115%',
              top: -17,
              left: '-7.5%',
            }} />
        </Parallax>
      </div>
      <div style={{
        margin: 18,
      }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <a href={link}>Link to GitHub</a>
          <Tooltip title='See Details'>
            <IconButton onClick={toggle} sx={{
              color: themeColors[theme].color,
              transition: 'all 200ms ease',
            }}>
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Tooltip>
        </div>
        <Collapse in={isOpen} timeout={200} easing='ease' unmountOnExit>
          <hr style={{ margin: '18px auto' }} />
          {children}
        </Collapse>
      </div>
    </div>
  );
};

export default InfoCard;