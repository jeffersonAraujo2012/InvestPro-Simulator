import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={'<div>oi<div/>'} />
      </Routes>
    </Router>
  );
}

export default App;
