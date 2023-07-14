import "./Header.css";
import { navData } from "../../../constant/data";

function Header() {
  return (
    <div id="firstPanel">
      {navData.map((item,i) => {
        return (
          <div
          key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={item.url} alt="" />
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Header;
