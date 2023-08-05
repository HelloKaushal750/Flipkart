import { midBanner } from "../../../constant/data";

function Banner() {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",padding:'10px',backgroundColor:"white",marginTop:"15px"}}>
      {midBanner.map((item,i) => {
        return <img src={item.url} key={i} alt="" />
      })}
    </div>
  );
}

function Banner2(){
    return <div style={{marginTop:"15px"}}>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/230/image/f3eb10134df17580.jpg?q=20" alt="" />
    </div>
}


export {Banner, Banner2};