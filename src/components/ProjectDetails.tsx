interface Props {
  languages: string[];
  frameworks: string[];
  type: string;
  link: string;
  description?: string;
}

const ProjectDetails = ({ languages, frameworks, type, link, description }: Props) => {
  return (
    <div>
      <p style={{
        margin: 12,
      }}>
        <i>Languages</i> - {languages.join(', ')}
        <br />
        <i>Tools</i> - {frameworks.join(', ')}
        <br />
        <i>Project Type</i> - {type}
      </p>
      {description
        ? (
          <p style={{
            margin: 12,
          }}>
            <i>Description</i>
            <br />
            {description}
          </p>
        )
        : null
      }
      <a
        href={link}
        style={{
          textAlign: 'center',
        }}>
          Go to GitHub Repository
      </a>
    </div>
  );
};

export default ProjectDetails;