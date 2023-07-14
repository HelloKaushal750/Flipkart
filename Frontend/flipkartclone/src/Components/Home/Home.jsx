import Header from "./Header/Header";
import HomeSlider from "./Home-Slider/HomeSlider";

function Home() {
  return (
    <div>
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

export default Home;
