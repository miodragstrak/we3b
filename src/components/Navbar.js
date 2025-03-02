import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-10">
        <Link to="/" className="text-xl font-bold text-white">Block Build Bor</Link>
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;