import "./App.css";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// 2 - adicionando links
// components
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* 4 - rota dinamica */}
          <Route path="/products/:id" element={<Product />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
