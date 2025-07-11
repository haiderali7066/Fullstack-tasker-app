import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://taskerapp-backend-production.up.railway.app/ping")
      .then((res) => {
        console.log("✅ Backend connected:", res.data);
      })
      .catch((err) => {
        console.error("❌ Backend NOT connected:", err.message);
      });
  }, []);

  return <h1>Testing Backend Connection</h1>;
}

export default App;
