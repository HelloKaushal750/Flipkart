import "./Header.css";
import { navData } from "../../../constant/data";
import { useSelector } from "react-redux";

function Header() {
  const isHomePage = useSelector((state) => {
    return state.isHomePage;
  });
  return (
    <div id="firstPanel">
      {navData.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor:"pointer"
            }}
          >
            {isHomePage && <img src={item.url} alt="" />}
            {isHomePage ? (
              <p>{item.text}</p>
            ) : (
              <p style={{ fontWeight: "600", fontSize: "14px", color:"#474747",marginTop:"-5px" }}>{item.text}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
