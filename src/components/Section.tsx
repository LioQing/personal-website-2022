import Typography from "@mui/material/Typography";

interface Props {
  heading: string;
  children?: React.ReactNode;
}

const Section = ({ heading, children }: Props) => {
  return (
    <div id={heading}>
      <Typography variant='h1'>
        {heading}
      </Typography>
      {children}
    </div>
  );
};

export default Section;