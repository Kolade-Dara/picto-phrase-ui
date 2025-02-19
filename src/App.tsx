import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import BuyHintCoinsPage from "./pages/BuyHintCoinsPage";
import AdminUploadPage from "./pages/AdminUploadPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAppDispatch } from "./redux/storehooks";
import { login } from "./redux/slices/authSlice";
import { useEffect, useState } from "react";
import { setPuzzles } from "./redux/slices/puzzleSlice";

const App = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  if (user) {
    dispatch(login(user));
  }

  const getGames = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}`;
    const config = {
      method: "GEt",
      headers: {

      }
    };

    const response = await fetch(url, config)
      .then((data) => data.json())
      .catch((err) => err);


    if (response.success) {
      dispatch(setPuzzles(response.data))
    } else {
      // setError(response.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    getGames();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/buycoins" element={<BuyHintCoinsPage />} />
      <Route path="/admin-upload" element={<AdminUploadPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default App;
