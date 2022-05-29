interface Props {
  src: string;
  title: string;
  year: string;
}

const ArtDisplay = ({ src, title, year }: Props) => {
  const style = {
    maxWidth: '100%',
    maxHeight: '70vh',
    margin: '12px auto',
    borderRadius: 12,
    boxShadow: '0px 0px 16px #00000044',
  };

  return (
    <div style={{ margin: '48px auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          style={style}
          src={src}
          alt={title} />
      </div>
      <h2 style={{ margin: '0px 6px' }}>{title} </h2><p style={{ margin: '1px 6px' }}>{year}</p>
    </div>
  )
}

export default ArtDisplay;