function ProjectCard({ project }) {
  const { name, description, url, image } = project;
  return (
    <div className="project-card">
      {image && (
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          style={{ width: "14rem", marginBottom: "1rem" }}
        />
      )}
      <h2 style={{ marginBottom: "1rem" }}>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="proj-link-btn">View On GitHub</button>
      </a>
    </div>
  );
}

export default ProjectCard;
