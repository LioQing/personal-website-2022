const Resources = () => {
  return (
    <>
      <style>{`
        @font-face {
          font-family: 'Open Sans';
          src: url('${process.env.PUBLIC_URL}/fonts/OpenSans.ttf') format('truetype');
        }`}
      </style>
    </>
  );
};

export default Resources;