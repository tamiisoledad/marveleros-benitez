import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
