import './App.css';
import Header from './components/header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import AdminPage from './pages/AdminPage/AdminPage';
import CreatePizzaPage from './pages/CreatePizzaPage/CreatePizzaPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/create-pizza" element={<CreatePizzaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
