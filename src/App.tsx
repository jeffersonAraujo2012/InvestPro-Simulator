import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from "./pages/authentication/Signin";
import Signup from "./pages/authentication/Signup";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserProvider";
import { ReactNode } from "react";
import useToken from "./hooks/useToken";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <AuthRouter>
                <Dashboard />
              </AuthRouter>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

function AuthRouter({ children }: { children: ReactNode }) {
  const token = useToken();
  if (!token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}

export default App;
