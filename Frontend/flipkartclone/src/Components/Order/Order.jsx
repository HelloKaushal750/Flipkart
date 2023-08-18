import { orderItem } from "../../Redux/action";
import { useEffect, useState } from "react";

function Order() {
  const [data, setData] = useState([]);
  useEffect(() => {
    orderItem(setData);
  }, []);
  console.log(data);
  return (
    <div>
      <div className="left_orderpage"></div>
      <div className="right_orderpage"></div>
    </div>
  );
}

export default Order;
