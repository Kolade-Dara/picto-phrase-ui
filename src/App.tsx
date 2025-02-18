import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import BuyHintCoinsPage from "./pages/BuyHintCoinsPage";
import AdminUploadPage from "./pages/AdminUploadPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAppDispatch } from "./redux/storehooks";
import { login } from "./redux/slices/authSlice";

const App = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const dispatch = useAppDispatch();

  if (user){
    dispatch(login(user));
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/buycoins" element={<BuyHintCoinsPage />} />
        <Route path="/admin-upload" element={<AdminUploadPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
