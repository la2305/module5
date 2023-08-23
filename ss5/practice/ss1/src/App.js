import {Routes,Route,link} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contract";
import Home from "./components/Home";

function App() {
  return (
    <div>
      //..
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;