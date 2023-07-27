import HomeSlider from "./Home-Slider/HomeSlider";
import Slider from "./Slider/Slider";
import { Banner, Banner2 } from "./Banner/Banner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "HOMEPAGE", payload: true });
    return ()=>{
      dispatch({ type: "HOMEPAGE", payload: false });
    }
  }, []);

  return (
    <div>
      <div
        style={{
          padding: "10px",
          border: "1px solid rgb(209, 208, 208)",
          backgroundColor: "#f1f2f4",
        }}
      >
        <HomeSlider />
        <Slider
          search={"topoffer"}
          banner={true}
          title={"Top Offers"}
          url={
            "https://rukminim1.flixcart.com/fk-p-flap/530/810/image/2d8334247d04dbd5.png?q=20"
          }
        />
        <Banner />
        <Slider
          search={"electronic"}
          banner={false}
          title={"Top Deals on Electronics"}
        />
        <Slider search={"groceries"} banner={false} title={"Top Groceries"} />
        <Slider
          search={"mobile"}
          banner={true}
          title={"Top Mobile Brands"}
          url={
            "https://rukminim1.flixcart.com/fk-p-flap/530/810/image/c2ef3285fada0782.png?q=20"
          }
        />
        <Banner2 />
        <Slider
          search={"coolsummer"}
          banner={false}
          title={"Deals for Summer"}
        />
      </div>
    </div>
  );
}

export default Home;
