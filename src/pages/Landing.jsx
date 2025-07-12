import { Link } from "react-router-dom";
import SplitText from "../components/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
export default function Landing() {
  return (
    <div className="text-center mt-20">
      <SplitText
        text="Welcome to MERN Tasker App By Haider"
        className="text-4xl font-bold"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      {/* <h1 className="text-4xl font-bold">
        Welcome to MERN Tasker App By Haider <br />
      </h1> */}
      <p> We need authentication to provide access</p>
      <div className="mt-8 space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
