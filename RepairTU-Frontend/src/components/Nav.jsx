import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isLoginPage = location.pathname === '/';

  return (
    <>
      <nav className="font-sans p-4 shadow-lg shadow-xl">
        <div className="flex item-center justify-between">
          <div className="font-bold flex">
            <div className="text-[#FF0505] flex text-[2rem] pr-2">REPAIR</div>
            <div className="text-[#FFD705] text-[2rem]">TU</div>
          </div>

          {/* Toggle Menu */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              type="button"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-haspopup="true"
              className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg"
              onClick={toggleMenu}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Main Menu (for larger screens) */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="menu-toggle"
          >
            <ul className="w-full md:w-auto font-sans md:flex text-red-600 text-[1.5rem] place-items-center mx-4">
              <li>
                <Link to="/Home" className="hover:text-orange-400  duration-500 px-5 py-7">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Status" className="hover:text-orange-400 duration-500 px-5 py-7">
                  Status
                </Link>
              </li>
              {!isLoginPage && <li>
                <Link to="/logout" className="hover:text-orange-200 hover:bg-red-500 duration-500 text-black px-5 py-1 mx-4 bg-red-500 text-white rounded-lg">
                  Logout
                </Link>
              </li>}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
            <li>
              <Link to="/Home" className="hover:text-orange-300 duration-500  px-5 py-2 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Status" className="hover:text-orange-300  duration-500  px-5 py-2">
                Status
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-orange-300 border duration-500 px-5 py-1 bg-red-500 text-white rounded-lg">
                Log out
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Nav;
