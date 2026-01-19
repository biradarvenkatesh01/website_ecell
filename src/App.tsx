import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
// import Gallery from './pages/Gallery';
import Contact from "./pages/Contact";
// import Resources from './pages/Resources';
// import Merchandise from './pages/Merchandise';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resources" element={<Resources />} /> */}
            {/* <Route path="/merchandise" element={<Merchandise />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
