import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Chartjs from "./pages/Chart";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chart" element={<Chartjs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
