export const getCartItem = (setData) => {
  fetch("http://localhost:7000/addtocart", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setData(res)
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
}
