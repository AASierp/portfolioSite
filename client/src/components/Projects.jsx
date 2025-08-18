import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

function Projects() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function gitHubFetch() {
      try {
        const response = await fetch(
          "https://api.github.com/users/AASierp/repos"
        );

        if (!response.ok) {
          setError("Fetch Failure");
          setLoading(false);
          return;
        }

        const data = await response.json();
        const projList = new Set([
          "Adventure_Game_Repo",
          "TaskForge",
          "RealEstateScrapeMVC",
          "TimeSheetFilter",
        ]);
        const filteredData = data.filter((e) => projList.has(e.name));

        const mappedData = filteredData.map((e) => ({
          name: e.name,
          description: e.description,
          url: e.html_url,
          image: `/images/${e.name}.webp`,
        }));

        setProject(mappedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    gitHubFetch();
  }, []);

  if (loading) {
    return <p>Loading Projects... </p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="project-container">
        {project.map((e) => (
          <ProjectCard key={e.name} project={e} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
