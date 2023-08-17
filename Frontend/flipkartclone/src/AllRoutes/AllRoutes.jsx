import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Product from "../Components/Product/Product";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Cart from "../Components/Cart/Cart";
import Booked from "../Components/Booked/Booked";
import Thankyou from "../Components/Thankyou/Thankyou";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:features" element={<Product />} />
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookingpage" element={<Booked />} />
        <Route path="/confirmation" element={<Thankyou />} />
    </Routes>
}

export default AllRoutes;