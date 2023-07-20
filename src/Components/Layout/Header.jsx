import { IconSvg as Logo } from "../../assets/svg/Logo/IconSvg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="Header-LayoutContainer">
        <Logo />

        <ul className="Header-Navbar">
          <li className="Header-NavbarItem">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "Header-NavbarLink--Actived" : "Header-NavbarLink"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="Header-NavbarItem">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "Header-NavbarLink--Actived" : "Header-NavbarLink"
              }
            >
              About
            </NavLink>
          </li>
          <li className="Header-NavbarItem">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "Header-NavbarLink--Actived" : "Header-NavbarLink"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
