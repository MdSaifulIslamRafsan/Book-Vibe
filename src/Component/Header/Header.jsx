import { Link, NavLink } from "react-router-dom";

const linkList = (
  <>
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink to={"/listedBook"}>Listed Books</NavLink>
    </li>
    <li>
      <NavLink to={"/pageToRead"}>Pages to Read</NavLink>
    </li>
  </>
);

const Header = () => {
  return (
    <nav className="bg-base-100 fixed top-0 w-full z-10  shadow-lg">
      <div className="navbar max-w-[1440px] mx-auto lg:w-10/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkList}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-lg lg:text-2xl whitespace-nowrap font-bold"
          >
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkList}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="relative cursor-pointer inline-flex items-center justify-center px-2 lg:px-6 py-2 lg:py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#23BE0A] rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56" />
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#22be0a4b]" />
            <span className="relative whitespace-nowrap">Sign In</span>
          </a>
          <a className="relative cursor-pointer inline-flex items-center justify-center px-2 lg:px-6 py-2 lg:py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#59C6D2] rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56" />
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#59c6d242]" />
            <span className="relative whitespace-nowrap">Sign Up</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
