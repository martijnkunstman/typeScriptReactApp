import { Routes, Route } from "react-router-dom";
import Items from "./components/Items";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
import "./App.css";

function App() {
  

  return (
    <>
      <Header title={"title header"}></Header>

      <Routes>
        <Route path="/" element={<Items></Items>}/>
        <Route path="/item/:id" element={<ItemDetail></ItemDetail>}/>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
