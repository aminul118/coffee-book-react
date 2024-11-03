import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "text-orange-400" : "hover:text-orange-400"}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coffees"
          className={({ isActive }) => `${isActive ? "text-orange-400" : "hover:text-orange-400"}`}
        >
          Coffees
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `${isActive ? "text-orange-400" : "hover:text-orange-400"}`}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 backdrop-blur-3xl bg-slate-800 ">
      <div className="navbar container mx-auto py-4">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbarLinks}
            </ul>
          </div>
          <NavLink to="/" className=" text-xl">
            Coffe Book
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-4">
            {navbarLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
