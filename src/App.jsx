import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
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
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
