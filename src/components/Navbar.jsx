import "./Navbar.css";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="NayePankh Logo" className="logo"/>
        <h2>NayePankh Foundation</h2>
      </div>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;