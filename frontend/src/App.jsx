import Home from "./components/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/courses/Courses.jsx"
import Signup from "./components/Signup.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
