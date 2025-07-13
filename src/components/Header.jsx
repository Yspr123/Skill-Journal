import { Link } from "react-router-dom"; // For client-side navigation

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-100 px-8 py-4 shadow mb-4">
     
      <div className="font-bold text-2xl text-gray-800">Skill Journal</div>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
        <Link to="/feedback" className="text-gray-700 hover:text-blue-600 transition">Feedback</Link>
      </nav>
    </header>
  );
}

export default Header;
