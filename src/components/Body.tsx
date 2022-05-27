import Heading from './Heading';

interface Props {
  heading?: string,
  children: React.ReactNode;
}

const Body = ({ heading, children }: Props) => {
  return (
    <div style={{
      top: 64,
      left: 25,
      width: 720,
      margin: '0 auto',
    }}>
      {heading
        ? (
          <Heading heading={heading}>
            {children}
          </Heading>
        )
        : children
      }
    </div>
  )
};

export default Body;