import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Pages
import Home from './pages/Home';
import ButtonExperiments from './pages/ButtonExperiments';
import ModalExperiments from './pages/ModalExperiments';
import StackedCards from './pages/StackedCards';
import CardHover from './pages/CardHover';
import DownloadArrow from './pages/DownloadArrow';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="nav-content"
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/buttons">Button Experiments</Link>
              </li>
              <li>
                <Link to="/modals">Modal Experiments</Link>
              </li>
              <li>
                <Link to="/stacked-cards">Stacked Cards</Link>
              </li>
              <li>
                <Link to="/card-hover">Card Hover</Link>
              </li>
              <li>
                <Link to="/download-arrow">Download Arrow</Link>
              </li>
            </ul>
          </motion.div>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buttons" element={<ButtonExperiments />} />
            <Route path="/modals" element={<ModalExperiments />} />
            <Route path="/stacked-cards" element={<StackedCards />} />
            <Route path="/card-hover" element={<CardHover />} />
            <Route path="/download-arrow" element={<DownloadArrow />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 