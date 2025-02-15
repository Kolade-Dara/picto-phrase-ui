import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
