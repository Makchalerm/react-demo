import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">
        React App 📃
      </Link>
      <div className="space-x-4 font-semibold">
        <Link
          to="/"
          className={`${
            location.pathname === '/' ? 'text-black-500' : 'text-gray-500'
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === '/about' ? 'text-black-500' : 'text-gray-500'
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
