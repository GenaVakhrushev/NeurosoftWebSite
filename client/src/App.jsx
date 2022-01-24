import { Route, Routes } from 'react-router';
import './App.css';
import { Link } from "react-router-dom";
import About from './components/About';
import Landing from './components/Landing';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Support from './components/Support';
import Vacancies from './components/Vacancies';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo"></div>
        <nav className="header-nav">
          <ul className="header-nav">
            <li>
              <Link to="/" className="nav-link">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/support" className="nav-link">
                Поддержка для клиентов
              </Link>
            </li>
            <li>
              <Link to="/vacancies" className="nav-link">
                Вакансии
              </Link>
            </li>
            <li>
              <Link to="/vacancies" className="last-link">
                Готовые решения
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-btns">
          <button className="header-btn">
            <div className="btn-icon-sign-in"></div>
            <span className="btn-text">Вход</span>
          </button>
          <button className="header-btn">
            <div className="btn-icon-lang"></div>
            <span className="btn-text">Язык</span>
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/solutions" element={<Solutions />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/vacancies" element={<Vacancies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
