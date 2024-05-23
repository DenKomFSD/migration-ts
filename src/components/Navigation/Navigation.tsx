import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const getNavLinkActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={getNavLinkActive}>
        Homepage
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getNavLinkActive}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
