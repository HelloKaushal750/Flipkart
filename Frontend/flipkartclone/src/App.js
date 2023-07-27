import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";
import Header from "./Components/Home/Header/Header";
import Footer from "./Components/Home/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
