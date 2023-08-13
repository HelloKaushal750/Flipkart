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

export const cartQuantity = (
  savedId,
  setquantity,
  toast,
  name,
  setData,
  setQuantity
) => {
  fetch(`http://localhost:7000/addtocart/qty/${savedId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ setquantity }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      getCartItem(setData);
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

export const savedQuantity = (
  id,
  setquantity,
  toast,
  name,
  setSavedData,
  setQuantity
) => {
  fetch(`http://localhost:7000/saveditem/quantity/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ setquantity }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      getSavedItem(setSavedData);
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong");
    });
};

export const calculation = (data,setPrice,dispatch) => {
  let originalP = data?.reduce((acc, item) => {
    return (
      Number(acc.original_price * acc.quantity) +
      Number(item.original_price * item.quantity)
    );
  });
  let discountP = data?.reduce((acc, item) => {
    return (
      Number((acc.original_price - acc.current_price) * acc.quantity) +
      Number((item.original_price - item.current_price) * item.quantity)
    );
  });
  let currentP = data?.reduce((acc, item) => {
    return (
      Number(acc.current_price * acc.quantity) +
      Number(item.current_price * item.quantity)
    );
  });
  setPrice({
    originalPrice: originalP,
    discountPrice: discountP,
    currentPrice: currentP,
  });
  dispatch({
    type: "ITEMPRICE",
    payload: {
      originalPrice: originalP,
      discountPrice: discountP,
      currentPrice: currentP,
    },
  });
};
