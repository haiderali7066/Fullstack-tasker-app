import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("taskerapp-backend-production.up.railway.app/register", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-4"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2 w-full"
      >
        Signup
      </button>
    </div>
  );
}
