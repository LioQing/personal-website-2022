interface Props {
  heading: string,
  columnCount: number,
  children: React.ReactNode;
}

const List = ({ heading, columnCount, children }: Props) => {
  return (
    <>
      <div style={{
        margin: '32px 0',
      }} />
      <h2>{heading}</h2>
      <div style={{
        columnCount,
        columnGap: 25,
      }}>
        <ul style={{
          margin: 0,
        }}>
          {children}
        </ul>
      </div>
    </>
  )
}

export default List;