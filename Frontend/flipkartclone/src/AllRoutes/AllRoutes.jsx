import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Product from "../Components/Product/Product";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
    </Routes>
}

export default AllRoutes;