import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./App.css";
// import Homepage from "../../pages/HomePage";
// import LoginPage from "../../pages/LoginPage";
// import RegistrationPage from "../../pages/RegistrationPage";
// import ContactsPage from "../../pages/ContactsPage";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshed } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Homepage = lazy(() => import("../../pages/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshed);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Layout>
        {isRefreshing ? (
          <b>Please wait, user info refreshing ...</b>
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="/registration"
                element={
                  <RestrictedRoute
                    component={<RegistrationPage />}
                    redirectTo="/"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </>
  );
}

export default App;
