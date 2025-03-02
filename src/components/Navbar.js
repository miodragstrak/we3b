import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-4">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;