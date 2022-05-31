import { forwardRef } from 'react';
import Container from '@mui/material/Container';

const UselessContainer = forwardRef(({ children }: { children?: React.ReactNode }, ref: any) => {
  return (
    <Container style={{ margin: 0 }} ref={ref} disableGutters>
      {children}
    </Container>
  );
});

export default UselessContainer;