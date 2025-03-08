import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/Products">
        <button className="navButton">Products</button>
      </Link>
      <Link to="/About">
        <button className="navButton">About us</button>
      </Link>
      <Link to="/Contact">
        <button className="navButton">Contact us</button>
      </Link>
      
    </div>
  );
}
