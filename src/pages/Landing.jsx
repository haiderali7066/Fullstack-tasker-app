import { Link } from "react-router-dom";
import SplitText from "../components/SplitText";
import ShinyText from "../components/ShinyText";
// import RotatingText from "../components/RotatingText";
import Aurora from "../components/Aurora";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
export default function Landing() {
  return (
    <div className="text-center">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
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
      <br />

      <ShinyText
        text="We need authentication to provide access!"
        disabled={false}
        speed={3}
        className="custom-class"
      />
      {/* <h1 className="text-4xl font-bold">
        Welcome to MERN Tasker App By Haider <br />
      </h1> */}

      {/* <p>We need authentication to provide access!</p> */}

      {/* <RotatingText
        texts={["React", "Bits", "Is", "Cool!"]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      /> */}

      <div className="mt-8 space-x-4 ">
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
