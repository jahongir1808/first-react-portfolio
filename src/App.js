import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeP, LoginP, RegisterP } from "./pages/front";
import {
  Dashboard,
  Experiences,
  Messages,
  Portfolios,
  Skills,
} from "./pages/admin";
import { AdminLayout, FrontLayout } from "./components/layout";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiHome } from "react-icons/fi";
import { FaRegRegistered } from "react-icons/fa";
import "./App.css";

function App() {
  const frontRoutes = [
    { url: "", page: HomeP },
    { url: "login", page: LoginP },
    { url: "register", page: RegisterP },
  ];

  const adminRoutes = [
    { url: "dashboard", page: Dashboard },
    { url: "experiences", page: Experiences },
    { url: "messages", page: Messages },
    { url: "portfolios", page: Portfolios },
    { url: "skills", page: Skills },
  ];

  return (
    <Router>
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
        {adminRoutes.map(({ url, page: Page }) => (
          <Route
            path={"/" + url}
            element={
              <AdminLayout>
                <Page />
              </AdminLayout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
