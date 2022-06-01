import { forwardRef } from 'react';
import Container from '@mui/material/Container';

const UselessContainer = forwardRef(({ children, style }: { children?: React.ReactNode, style?: any }, ref: any) => {
  return (
    <Container style={{ margin: 0, ...style }} ref={ref} disableGutters>
      {children}
    </Container>
  );
});

export default UselessContainer;