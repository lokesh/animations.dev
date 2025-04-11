import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Pages
import Home from './pages/Home';
import StackedCards from './pages/StackedCards';
import CardHover from './pages/CardHover';
import DownloadArrow from './pages/DownloadArrow';
import Toasts from './pages/Toasts';
import TextReveal from './pages/TextReveal';
import Orbit from './pages/Orbit';
import CoinSpin from './pages/CoinSpin';
import TabSlider from './pages/TabSlider';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
            <ul>
              <li>
                <Link to="/">Home</Link>
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
              <li>
                <Link to="/toasts">Toasts</Link>
              </li>
              <li>
                <Link to="/text-reveal">Text Reveal</Link>
              </li>
              <li>
                <Link to="/orbit">Orbit</Link>
              </li>
              <li>
                <Link to="/coin-spin">Coin Spin</Link>
              </li>
              <li>
                <Link to="/tab-slider">Tab Slider</Link>
              </li>
            </ul>

        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stacked-cards" element={<StackedCards />} />
            <Route path="/card-hover" element={<CardHover />} />
            <Route path="/download-arrow" element={<DownloadArrow />} />
            <Route path="/toasts" element={<Toasts />} />
            <Route path="/text-reveal" element={<TextReveal />} />
            <Route path="/orbit" element={<Orbit />} />
            <Route path="/coin-spin" element={<CoinSpin />} />
            <Route path="/tab-slider" element={<TabSlider />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 