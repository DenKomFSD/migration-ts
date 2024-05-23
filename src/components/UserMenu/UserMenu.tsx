import { useDispatch, useSelector } from "react-redux";
import css from "../UserMenu/UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  const user = useSelector(selectUser);
  return (
    <>
      <div className={css.styles}>
        <p>Welcome, {user.name}</p>
        <button type="submit" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </>
  );
}
