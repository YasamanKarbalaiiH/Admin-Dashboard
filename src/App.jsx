import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Invoices from "./pages/Invoices";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 pr-2 bg-light-bg dark:bg-dark-bg">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                index
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/products"
                element={
                  <PageTransition>
                    <Products />
                  </PageTransition>
                }
              />
              <Route
                path="/customers"
                element={
                  <PageTransition>
                    <Customers />
                  </PageTransition>
                }
              />
              <Route
                path="/invoices"
                element={
                  <PageTransition>
                    <Invoices />
                  </PageTransition>
                }
              />
              <Route
                path="/help"
                element={
                  <PageTransition>
                    <Help />
                  </PageTransition>
                }
              />
              <Route
                path="/settings"
                element={
                  <PageTransition>
                    <Settings />
                  </PageTransition>
                }
              />
              <Route
                path="/logout"
                element={
                  <PageTransition>
                    <Logout />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
