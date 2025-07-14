import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-100 px-8 py-4 shadow mb-4 sticky top-0 z-50">
      {/* Left side: Logo and Title */}
      <div className="flex items-center space-x-3">
        {/* Simple Logo SVG */}
        <Link to="/">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
            <span className="text-white font-bold text-xl">SJ</span>
          </div>
        </Link>
        <span className="font-extrabold text-xl text-gray-800 tracking-tight">
          Skill Journal
        </span>
      </div>

      {/* Right side: Nav and Notifications */}
      <nav className="flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          Home
        </Link>
        <Link
          to="/feedback"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Feedback
        </Link>
        {/* Notification bell */}
        <button className="relative" title="Notifications (demo)" tabIndex={-1}>
          {/* Heroicons bell svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-blue-600 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.64 5.36 6 7.929 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Notification dot */}
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
