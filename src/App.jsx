import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Foo from "./components/Foo";
import Formulario from "./Pages/Formulario";

function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Formulario" element={<Formulario/>} />
        </Routes>
      </BrowserRouter>
      <Foo></Foo>
    </>
  );
}

export default App;
