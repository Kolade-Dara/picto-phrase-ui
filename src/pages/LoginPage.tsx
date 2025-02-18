import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/redux/storehooks";
import { login } from "@/redux/slices/authSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      username,
      password
    }

    const url = `${import.meta.env.VITE_BASE_URL}/login`;
    const config = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, config)
      .then((data) => data.json())
      .catch((err) => err);


    if (response.success) {
      setUsername('');
      setPassword('');
      dispatch(login(response.user))
      window.location.href = '/profile';
    } else {
      setError(response.message);
    }

    setLoading(false);

  };

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen p-4 justify-start gap-6 bg-slate-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="LoginUsername">Username</Label>
          <Input
            id="LoginUsername"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="loginPassword">Password</Label>
          <Input
            id="loginPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? 'loading' : 'Login'}
        </Button>
        {error && (
          <div>{error}</div>
        )}
      </form>
      <div className="mt-4 text-center">
        <span>Don't have an account? </span>
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
