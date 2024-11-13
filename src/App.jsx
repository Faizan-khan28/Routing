import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import About from "./components/pages/Contact";

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/" element={<About/>} />
         <Route path="/" element={<Contact/>} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
