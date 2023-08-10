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

export const movetosave = (id, setData, setSavedData, toast, name) => {
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
      toast({
        title: `${name} has been Saved For Later`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      getCartItem(setData);
      getSavedItem(setSavedData);
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

export const movetocart = (id, setData, setSavedData, toast, name) => {
  fetch(`http://localhost:7000/saveditem/${id}`, {
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
        title: `${name} has been moved to Cart`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      getCartItem(setData);
      getSavedItem(setSavedData);
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
};

export const removeFromSaved = (id, data, setSavedData, toast) => {
  fetch(`http://localhost:7000/saveditem/removeitem/${id}`, {
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
        title: `Successfully removed ${data.name} from your saved`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      getSavedItem(setSavedData);
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
};
