import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NavBar from "./components/layout/NavBar";

function App() {

  return (
    <>
     <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/About" element={<About/>} />
         <Route path="/Contact" element={<Contact/>} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
