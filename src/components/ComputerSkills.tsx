import Body from './Body';
import List from './List';

const ComputerSkills = () => {
  const PL = [
    'C++', 'C#', 'C',
    'Rust', 'Python', 'JavaScript',
    'TypeScript', 'Lua'
  ];

  const DF = [
    'Windows Presentation Foundation (WPF)',
    'Universal Windows Platform (UWP)',
    'React',
    'Unity',
    'Unreal Engine',
  ];

  const CS = [
    'Adobe Photoshop, Illustrator, Premiere Pro',
    'Blender',
  ];

  return (
    <Body heading='Computer Skills'>
      <p>
        An overview of my computer skills including programming languages, development frameworks, and computer softwares I have worked with.
      </p>
      <List heading='Programming Languages' columnCount={3}>
        {PL.map(x => <li key={x}>{x}</li>)}
      </List>
      <List heading='Development Frameworks' columnCount={1}>
        {DF.map(x => <li key={x}>{x}</li>)}
      </List>
      <List heading='Computer Softwares' columnCount={1}>
        {CS.map(x => <li key={x}>{x}</li>)}
      </List>
    </Body>
  )
}

export default ComputerSkills;