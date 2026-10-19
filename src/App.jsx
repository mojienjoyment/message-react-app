import { useState } from "react";
import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import Name from "./pages/Name.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Home onNavigate={setPage} />}
      {page === "data" && <Data onNavigate={setPage} />}
      {page === "name" && <Name onNavigate={setPage} />}
    </div>
  );
}

export default App;