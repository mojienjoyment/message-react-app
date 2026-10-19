import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import Name from "./pages/Name.jsx";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/name" element={<Name />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;