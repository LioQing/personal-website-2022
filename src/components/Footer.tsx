import Typography from '@mui/material/Typography';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Typography variant='body2' align='center'>
        &copy; Copyright {currentYear}, Lio Qing
      </Typography>
    </footer>
  )
}

export default Footer;