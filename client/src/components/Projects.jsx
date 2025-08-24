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
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgb(48, 58, 75)",
          fontWeight: "bold",
          padding: "1rem",
          width: "100vw",
          marginBottom: "3rem",
          textShadow: "1px 1px 10px rgba(255, 170, 76, .6)",
        }}
      >
        Featured Projects
      </h2>
      <div className="project-container">
        {project.map((e) => (
          <ProjectCard key={e.name} project={e} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
