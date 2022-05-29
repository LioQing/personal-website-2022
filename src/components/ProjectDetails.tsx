interface Props {
  languages: string[];
  frameworks: string[];
  type: string;
  description?: string;
}

const ProjectDetails = ({ languages, frameworks, type, description }: Props) => {
  return (
    <div>
      <p>
        <i>Languages</i>: {languages.join(', ')}
        <br />
        <i>Tools</i>: {frameworks.join(', ')}
        <br />
        <i>Project Type</i>: {type}
      </p>
      {description
        ? (
          <p>
            <i>Description</i>:
            <br />
            {description}
          </p>
        )
        : null
      }
    </div>
  );
};

export default ProjectDetails;