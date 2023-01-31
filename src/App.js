import Header from "./Componants/header/Header";
import Home from "./Componants/Home/Home";
import DataProvider from "./Context/dataProvider";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import DetailsView from "./Componants/Details/DetailsView";
import Cart from "./Componants/cart/Cart";

function App(children) {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
           <Route path="/" element={<Home/>}  />
           <Route path="/product/:id" element={<DetailsView/>} />
           <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
export default App;