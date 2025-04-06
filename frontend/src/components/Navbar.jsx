import React from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="border border-gray-200 rounded-lg p-5 mx-10 md:mx-20 lg:mx-40 xl:mx-60 mt-5">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">WebSec Analyzer</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 items-center">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
          <div className="hidden md:flex gap-5 items-center">
            <a href="">Login</a>
            <a href="">Sign Up</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="18" r="2" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Popup */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 right-10 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-100 p-5">
            <ul className="flex flex-col gap-3">
              <a href=""><li>Home</li></a>
              <a href=""><li>About</li></a>
              <a href=""><li>Contact</li></a>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar