function Header() {
  return (
    <div id="home" className="header-container">
      <nav>
        <div className="mono-wrap">
          <a href="/" className="monogram" aria-label="Home">
            <img className="mono" src="/images/mono.jpg" alt="" />
          </a>

          <nav className="mono-pop" aria-label="Social">
            <a href="https://github.com/aasierp" className="pop-item">
              <img
                style={{ background: "rgb(255, 170, 76)", width: "2rem" }}
                src="/images/github.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-sierp"
              className="pop-item"
            >
              <img
                style={{ background: "rgb(255, 170, 76)", width: "2rem" }}
                src="/images/in.svg"
              />
            </a>
            <a href="mailto:aaronsierp@gmail.com" className="pop-item">
              <img
                style={{ background: "rgb(255, 170, 76)", width: "2rem" }}
                src="/images/tl.webp"
              />
            </a>
          </nav>
        </div>
        {/* <a href="#home">Home</a> */}
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Connect</a>
        <a href="/assets/resume.pdf" target="_blank">
          Resume
        </a>
        {/* <a href="#bio">Bio</a> */}
      </nav>
      <div className="title"></div>
    </div>
  );
}

export default Header;
