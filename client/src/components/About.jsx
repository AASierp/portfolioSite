function About() {
  return (
    <>
      <h2
        id="about"
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
          marginTop: "3rem",
          textShadow: "1px 1px 10px rgba(255, 170, 76, .6)",
        }}
      >
        About Me
      </h2>
      <div className="about-container">
        <p>
          I’m a developer with a strong foundation in C#/.NET, JavaScript,
          React, and SQL, driven by a passion for solving problems and building
          clean, functional applications. My journey into tech started after 15
          years in the industrial world, where I worked in electrical
          maintenance and controls. That background taught me how to
          troubleshoot, think systematically, and stay calm under pressure —
          skills I now apply to software development.
        </p>
        <p>
          I’ve completed both a frontend and backend bootcamp through CODE:YOU,
          gaining hands-on experience with modern frameworks, databases, and
          deployment practices. My recent projects include building a full-stack
          bug tracker, a timekeeping filter tool for Excel, and an AI-powered
          book recommendation app concept.
        </p>
        <p>
          I’m constantly learning, refining my skills, and exploring new
          technologies — whether it’s cloud platforms like AWS, advanced React
          features, or data-driven problem-solving. Above all, I enjoy creating
          tools that are both practical and intuitive, with an eye toward
          long-term scalability and maintainability.
        </p>
        <p>
          When I’m not coding, I’m usually reading (Stephen King and Robert
          McCammon are favorites), collecting vintage military rations, or
          brainstorming my next project idea.
        </p>
      </div>
    </>
  );
}

export default About;
