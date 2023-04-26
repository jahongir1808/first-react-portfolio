import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeP, LoginP, RegisterP } from "./pages/front";
import { AdminLayout, FrontLayout } from "./components/layout";
import { ToastContainer } from "react-toastify";
import { TOKEN } from "./const";
// import NotFound from "./pages/front/NotFound";
import { adminRoutes } from "./const/menus";
import { ROLE } from "./utils";
import "./App.css";

const isAuthorized = localStorage.getItem(TOKEN) && ROLE !== "user";

function App() {
  const frontRoutes = [
    { url: "", page: HomeP },
    { url: "login", page: LoginP },
    { url: "register", page: RegisterP },
  ];
  return (
    <Router>
      <ToastContainer autoClose={500} />
      <Routes>
        {frontRoutes.map(({ url, page: Page }, i) => (
          <Route
            key={i}
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
          adminRoutes.map(({ url, page: Page }, i) => (
            <Route
              key={i}
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
//  <Route path="*" element={<NotFound />} />;
