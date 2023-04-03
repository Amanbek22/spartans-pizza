import './App.css';
import Header from './components/header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>

    </div>
  );
}

export default App;
