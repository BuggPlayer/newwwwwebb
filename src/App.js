import "./App.css";

import Home from "./home/Home";
import Clinets from "./clients/Clinets";
import Nav from "./navbar/Nav";
import Features from "./featurew/Features";
import Emailcard from "./emailcard/Emailcard";
import Footer from "./footer/Footer";



import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Emailcard />} />
        </Routes>
        <Clinets />
        <Features />
        <Emailcard />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
