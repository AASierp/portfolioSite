function Header() {
  return (
    <div id="header" className="header-container">
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
            <a href="https://www.linkedin.com/in/aaron-sierp" className="pop-item">
              <img
                style={{ background: "rgb(255, 170, 76)", width: "2rem" }}
                src="/images/in.svg"
              />
            </a>
            <a href="mailto:you@domain.com" className="pop-item">
              <img
                style={{ background: "rgb(255, 170, 76)", width: "2rem" }}
                src="/images/mail.png"
              />
            </a>
          </nav>
        </div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#bio">Bio</a>
      </nav>
      <div className="title"></div>
    </div>
  );
}

export default Header;
