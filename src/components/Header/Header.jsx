import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header id="head">
      <Link to="/">
        <h1>Perentron 2.0</h1>
      </Link>
    </header>
  );
}

export default Header;
