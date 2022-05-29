import { useState, useContext } from 'react';
import { themeColors, ThemeContext } from '../context/theme';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export interface Item {
  title: string;
  description: string;
  component: React.ReactNode;
}

interface Props {
  items: Item[];
}

const CycleList = ({ items }: Props) => {
  const [index, setIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '48px auto',
      }}>
        <Button
          onClick={() => setIndex((index - 1 + items.length) % items.length)}
          sx={{
            width: '50px',
            height: '560px',
            borderRadius: '12px',
            color: themeColors[theme].color,
            backgroundColor: themeColors[theme].frontBackground,
            boxShadow: '0px 0px 16px #00000044',
            transition: 'all 200ms ease',
            '&:hover': {
              backgroundColor: themeColors[theme].hover,
            }
          }}>
          <KeyboardArrowLeftIcon sx={{
            width: '42px',
            height: '42px',
          }} />
        </Button>
        <div style={{
          position: 'relative',
          zIndex: -1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 580,
          height: 560,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: 560 * items.length,
            height: 560,
          }}>
            {[...items.keys()]
              .map(i => i - Math.floor(items.length / 2))
              .map(i => (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: 560,
                  height: 560,
                  opacity: i === 0 ? 1 : 0,
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    maxWidth: '100%',
                    maxHeight: '70%',
                  }}>
                    {items[(index + i + items.length) % items.length].component}
                  </div>
                  {i === 0
                    ? (
                      <div style={{ margin: 12 }}>
                        <h2 style={{ margin: '6px auto' }}>{items[index].title}</h2>
                        <p style={{ margin: '6px auto' }}>{items[index].description}</p>
                      </div>
                    )
                    : null
                  }
                </div>
              ))
            }
          </div>
        </div>
        <Button
          onClick={() => setIndex((index + 1) % items.length)}
          sx={{
            width: '50px',
            height: '560px',
            borderRadius: '12px',
            color: themeColors[theme].color,
            backgroundColor: themeColors[theme].frontBackground,
            boxShadow: '0px 0px 16px #00000044',
            transition: 'all 200ms ease',
            '&:hover': {
              backgroundColor: themeColors[theme].hover,
            }
          }}>
          <KeyboardArrowRightIcon sx={{
            width: '42px',
            height: '42px',
          }} />
        </Button>
      </div>
    </>
  )
};

export default CycleList;