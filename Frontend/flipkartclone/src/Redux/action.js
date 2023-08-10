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
      setData(res);
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
};

export const removeFromCart = (id, data, setData, toast) => {
  fetch(`http://localhost:7000/addtocart/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      toast({
        title: `Successfully removed ${data.name} from your cart`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      getCartItem(setData);
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
};

export const movetosave = (id,setData,setSavedData) => {
  fetch(`http://localhost:7000/saveditem/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      alert(res.message);
      getCartItem(setData)
      getSavedItem(setSavedData)
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
};

export const getSavedItem = (setSavedData) => {
  fetch("http://localhost:7000/saveditem", {
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
      setSavedData(res);
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
};
