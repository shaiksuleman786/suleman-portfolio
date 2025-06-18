function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand col" href="#">shaiksuleman</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav m-auto">
          <a className="nav-link text-danger active" href="#aboutme">
            About Me <span className="visually-hidden">(current)</span>
          </a>
          <a className="nav-link text-danger" href="#projects">Projects</a>
          <a className="nav-link text-danger" href="#certificate">Certificates</a>
          <a className="nav-link text-danger" href="#contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
