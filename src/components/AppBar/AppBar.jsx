import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
