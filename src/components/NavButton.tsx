interface Props {
  heading: string,
  isCurr: boolean,
}

const NavButton = ({ heading, isCurr }: Props) => {
  return (
    <a
      href={`#${heading}`}
      className={isCurr
        ? 'nav-button-active'
        : 'nav-button'
      }>
      {heading}
    </a>
  );
};

export default NavButton;