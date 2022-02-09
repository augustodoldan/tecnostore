import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/productos"></Route>
        <Route path="/contacto"></Route>
        <Route path="/about"></Route>
      </Routes>
    </Router>
  );
}

export default App;
