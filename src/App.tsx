import { Route, BrowserRouter, Routes } from "react-router-dom";
import Coins from "./components/Coins";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/coins" element={<Coins />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
