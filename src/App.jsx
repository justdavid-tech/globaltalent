import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import JoinClass from "./pages/join-class";
import Programs from "./pages/programs";
import Testimonies from "./pages/testimonies";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-class" element={<JoinClass />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/testimonies" element={<Testimonies />} />
      </Routes>
    </>
  )
}

export default App
