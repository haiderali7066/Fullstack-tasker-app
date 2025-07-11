import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to MERN Auth App</h1>
      <div className="mt-8 space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Signup</Link>
      </div>
    </div>
  );
}
