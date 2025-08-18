function Header() {
  return (
    <div id = "header" className ="header-container">
      <div>
        <img className = "mono" src="/images/mono.jpg"/>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#bio">Bio</a>
      </nav>
      <div className="title">
        <h1 className = "header-header">I'm Aaron Sierp</h1>
      </div>
    </div>
  );
}

export default Header;
