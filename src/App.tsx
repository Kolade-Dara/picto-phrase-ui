import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import BuyHintCoinsPage from "./pages/BuyHintCoinsPage";

const App = () => {
  console.log("App render");
  return (
    <div>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/buycoins">Buy Hint Coins</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/buycoins" element={<BuyHintCoinsPage />} />
      </Routes>
    </div>
  );
};

export default App;
