import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import DetailedInfo from './pages/DetailedInfo';
import Option from "./pages/Option";

import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/option" element={<Option />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/:id" element={<DetailedInfo />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
