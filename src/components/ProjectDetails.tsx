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
        Languages - {languages.join(', ')}
        <br />
        Tools - {frameworks.join(', ')}
        <br />
        Project Type - {type}
      </p>
      {description
        ? (
          <p style={{
            margin: 12,
          }}>
            Description
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