import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Name from "./pages/Name";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/name" element={<Name />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;