import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function removeRepeatedWord(inputString) {
  const words = inputString.split(" ");
  const newArr = [];
  words.forEach((ele) => {
    if (!newArr.includes(ele)) {
      newArr.push(ele);
    }
  });
  const sentence = newArr.join(" ");
  return sentence;
}

function ProductDetail() {
  const [data, setData] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:7000/products/${productId}`).then((res) => {
      let filterData = res.data?.map((ele) => {
        const modifiedString = removeRepeatedWord(ele.name);
        if (modifiedString.length > 80) {
          const truncatedText = modifiedString.substring(0, 80) + "...";
          ele.name = truncatedText;
        } else {
          ele.name = modifiedString;
        }
        return ele;
      });
      setData(filterData[0]);
    });
  }, []);

  return <div>
    
  </div>;
}

export default ProductDetail;
