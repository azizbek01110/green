import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Likes from "./pages/likes/Likes";
import Basket from "./pages/basket/Basket";
import Footer from "./components/Footer/Footer";


function App() {
  const location = useLocation();
  console.log(location);

  if (location.pathname.includes("/login")) {
    return <Login />;
  }

  return (
    <div>
      <NavbarMain />
    


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Footer/>
    </div>
  );
}

export default App;
