import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Student Life</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="text-white hover:text-yellow-300">
              Events
            </Link>
          </li>
          <li>
            <Link to="/clubs" className="text-white hover:text-yellow-300">
              Clubs
            </Link>
          </li>
          <li>
            <Link to="/studyGroups" className="text-white hover:text-yellow-300">
              Study Groups
            </Link>
          </li>
          <li>
            <Link to="/resources" className="text-white hover:text-yellow-300">
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
