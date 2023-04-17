import "./App.css";
import Header from "./components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreatePizzaPage from "./pages/CreatePizzaPage/CreatePizzaPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/slices/pizzaSlice";

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( fetchPizzas() )
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/admin" element={<PrivateRoute Component={AdminPage} />} />
        <Route
          path="/create-pizza"
          element={<PrivateRoute Component={CreatePizzaPage} />}
        />
        <Route
          path="/login"
          element={<PublicRoute Component={() => <LoginPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
