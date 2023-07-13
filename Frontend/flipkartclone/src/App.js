import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Home/Header/Header";
import HomeSlider from "./Components/Home/Home-Slider/HomeSlider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div
        style={{
          padding: "10px",
          border: "1px solid rgb(209, 208, 208)",
          backgroundColor: "#f1f2f4",
        }}
      >
        <HomeSlider />
      </div>
    </div>
  );
}

export default App;
