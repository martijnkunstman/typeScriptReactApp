import { Routes, Route } from "react-router-dom";
import Items from "./components/Items";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Header title={"title header"}></Header>

      <Routes>
        <Route path="/" element={<Home title={"home title"}></Home>} />
        <Route path="/items" element={<Items></Items>} />
        <Route path="/item/:id" element={<ItemDetail></ItemDetail>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
