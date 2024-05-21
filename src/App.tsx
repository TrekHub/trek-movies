import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="font-urbanist">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<h1>Auth</h1>} />
          <Route path="/movies" element={<h1>Movies</h1>} />
          <Route path="/tv-shows" element={<h1>Tv Shows</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
