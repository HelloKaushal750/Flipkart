import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Product from "../Components/Product/Product";
import ProductDetail from "../Components/ProductDetail/ProductDetail";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:features" element={<Product />} />
        <Route path="/:productId" element={<ProductDetail />} />
    </Routes>
}

export default AllRoutes;