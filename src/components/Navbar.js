import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Block Build Bor</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;