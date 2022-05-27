import { CSSTransition } from 'react-transition-group';
import '../styles.css';

interface Props {
  isSidebarOpen: boolean;
  children: React.ReactNode;
}

const Sidebar = ({ isSidebarOpen, children }: Props) => {
  return (
    <CSSTransition
      in={isSidebarOpen}
      timeout={200}
      classNames='sidebar'
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default Sidebar;