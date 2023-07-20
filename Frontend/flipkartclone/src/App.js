import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";
import Header from "./Components/Home/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
