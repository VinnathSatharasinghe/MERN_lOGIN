import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Singup from "./singup";
import LLogin from "./llogin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Singup />}></Route>
        <Route path="/login" element={<LLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
