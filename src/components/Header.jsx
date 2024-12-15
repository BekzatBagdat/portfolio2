import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black p-4 z-10">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Bekzat.dev
        </Link>
        <button
          onClick={toggleMenu}
          className="sm:hidden text-black p-2 focus:outline-none"
        >
          {isOpen ? (
            <span className="text-xl">&#x2715;</span>
          ) : (
            <span className="text-xl">&#9776;</span>
          )}
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute sm:static top-full left-0 w-full sm:w-auto sm:flex flex-col sm:flex-row bg-white sm:bg-transparent space-y-4 sm:space-y-0 sm:space-x-8 p-4 sm:p-0`}
        >
          <li>
            <Link
              to="/"
              className="text-lg hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-lg hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
