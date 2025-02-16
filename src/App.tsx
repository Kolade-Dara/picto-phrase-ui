import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import BuyHintCoinsPage from "./pages/BuyHintCoinsPage";
import AdminUploadPage from "./pages/AdminUploadPage";

const App = () => {
  console.log("App render");
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/buycoins" element={<BuyHintCoinsPage />} />
        <Route path="/admin-upload" element={<AdminUploadPage />} />
      </Routes>
    </div>
  );
};

export default App;
