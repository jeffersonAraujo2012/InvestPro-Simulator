import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signin from "./pages/authentication/Signin";
import Signup from "./pages/authentication/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
