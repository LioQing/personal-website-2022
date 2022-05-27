interface Props {
  heading: string,
  children: React.ReactNode,
}

const Heading = ({ heading, children }: Props) => {
  return (
    <div id={heading}>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

export default Heading;