import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BiblioNook from "./project-pages/BiblioNook";
import MythsAndMysteries from "./project-pages/MythsAndMysteries";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mythsandmysteries" element={<MythsAndMysteries/>}/>
        <Route path="/biblionook" element={<BiblioNook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
