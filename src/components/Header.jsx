// import React from 'react'

const Header = () => {
  return (
    <header className="h-20 bg-green-400 shadow-md shadow-green-700">
      <nav className="flex h-full items-center justify-between p-2">
        <h3 className="text-xl font-bold">Il mio blog</h3>
        <ul>
          <li>
            <a className="font-bold" href="#">
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
