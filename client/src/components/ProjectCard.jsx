function ProjectCard({ project }) {
  const { name, description, url, image } = project;
  return (
    <div className="project-card">
      {image && (
        <img className="card-image"
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
        />
      )}
      <h3 style={{fontWeight: "bold"}}>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="proj-link-btn">View On GitHub</button>
      </a>
    </div>
  );
}

export default ProjectCard;
