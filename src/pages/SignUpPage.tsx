import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [nickname, setNickname] = useState("");

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);

    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("nickname", nickname);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }
    const url = `${import.meta.env.VITE_BASE_URL}/register`;
    const config = {
      method: "POST",
      body: formData,
      headers: {},
    };

    const response = await fetch(url, config)
      .then((data) => data.json())
      .catch((err) => err);

    if (response.success) {
      window.location.href = "/login";
    } else {
      setError(response.message);
    }
    setLoading(false);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.webp)$/i;
      if (!allowedExtensions.exec(file.name)) {
        setMessage(
          "Invalid file type. Only PNG, JPEG, WEBP, and JPG are allowed."
        );
        setProfileImage(null);
        setImagePreview("");
        return;
      }
      setMessage(null);
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen p-4 justify-start gap-6 bg-slate-100">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="border-2 border-dashed rounded-md p-4 text-center w-full h-full flex items-center justify-center">
            <label className="cursor-pointer ">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Puzzle Preview"
                  className="h-auto w-auto max-h-[300px] max-w-[300px] object-cover  rounded-full mx-auto"
                />
              ) : (
                <div className="text-gray-400 ">
                  <p>Click or Drag &amp; Drop to Upload profile image</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <p className="text-red-500">{message}</p>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer mt-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <div className="relative">
          <Label htmlFor="confirm">Confirm Password</Label>
          <Input
            id="confirm"
            type={showPassword ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <span
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer mt-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <div>
          <Label htmlFor="nickname">Nickname</Label>
          <Input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>

        {error && <div>{error}</div>}

        <Button type="submit" disabled={loading}>
          {loading ? "Signing Up" : "Sign Up"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <span>Already have an account? </span>
        <Link to="/login" className="text-blue-600 hover:underline">
          login
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
