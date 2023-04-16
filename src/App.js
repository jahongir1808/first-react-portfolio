import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeP, LoginP, RegisterP } from "./pages/front";

import { AdminLayout, FrontLayout } from "./components/layout";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiHome } from "react-icons/fi";
import { FaRegRegistered } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { TOKEN } from "./const";
import NotFound from "./pages/front/NotFound";
import "./App.css";
import { adminRoutes } from "./const/menus";
import { ROLE } from "./utils";

const isAuthorized =
  localStorage.getItem(TOKEN) &&
  ROLE !== "user";

function App() {
  const frontRoutes = [
    { url: "", page: HomeP },
    { url: "login", page: LoginP },
    { url: "register", page: RegisterP },
  ];
  return (
    <Router>
      <ToastContainer />
      <div
        className="links"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <NavLink to="/login">
          <i>
            <FiLogIn />
          </i>
          Login
        </NavLink>
        <NavLink to="/register">
          <FaRegRegistered />
          Register
        </NavLink>
        <NavLink to="/">
          <FiHome />
          Home
        </NavLink>
      </div>
      <Routes>
        {frontRoutes.map(({ url, page: Page }) => (
          <Route
            path={"/" + url}
            element={
              <FrontLayout>
                <Page />
              </FrontLayout>
            }
          />
        ))}
      </Routes>
      <Routes>
        {isAuthorized &&
          adminRoutes.map(({ url, page: Page }) => (
            <Route
              path={"/" + url}
              element={
                <AdminLayout>
                  <Page />
                </AdminLayout>
              }
            />
          ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
