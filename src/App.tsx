import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home";
import { NavBar } from "./components/NavBar";
import { Auth } from "./pages/auth";
import { MoviePage } from "./pages/movie";

function App() {
  return (
    <div className="font-urbanist min-h-screen   ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/movies" element={<h1>Movies</h1>} />
          <Route path="/tv-shows" element={<h1>Tv Shows</h1>} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
