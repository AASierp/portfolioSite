function Hero() {
  return (
    <div className="two-column-hero">
      <div className="hero-column name">
        <h3 style={{color: "rgb(255, 170, 76)"}}>Hi, my name is...</h3>
        <h1 style={{ color: "white", fontWeight: "bold", lineHeight: "6rem" }}>
          Aaron Sierp
        </h1>
      </div>
      <div className="hero-column img-me-container">
        <img
          className="me"
          alt="picture of Aaron Sierp"
          src="/images/linkedin_profile_picture.jpg"
        />
      </div>
      <div className="hero-container hero-column">
        <h3 style={{ color: "white" }}>im a...</h3>
        <p>
          Full-stack developer passionate about building clean, functional web
          applications. I specialize in C#, JavaScript, and React to create
          solutions that balance usability with strong backend foundations.
          Whether designing intuitive user interfaces or optimizing data flow
          behind the scenes, my goal is to deliver reliable, scalable projects
          that make a difference.
        </p>
      </div>
    </div>
  );
}

export default Hero;
