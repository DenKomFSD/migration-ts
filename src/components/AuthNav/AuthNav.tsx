import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const getNavLinkActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function AuthNav() {
  return (
    <nav>
      <NavLink to="/registration" className={getNavLinkActive}>
        Register
      </NavLink>
      <NavLink to="/login" className={getNavLinkActive}>
        Login
      </NavLink>
    </nav>
  );
}
