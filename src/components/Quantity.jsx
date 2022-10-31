import React, { useEffect, useState } from "react";
import { changQuantity } from "../features/cart/cartSlice";

import "../assets/css/Quantity.css";
import { useDispatch } from "react-redux";

function Quantity(props) {
  const { isCartPage, value, id } = props;
  let newValue = value ? value : 1;
  const [quantity, setQuantity] = useState(newValue);
  const [inputValue, setInputValue] = useState(newValue);
  const dispatch = useDispatch();

  if (quantity <= 0) {
    setQuantity(1);
  }
  // if (inputValue <= 0) {
  //     setInputValue(1)
  // }

  useEffect(() => {
    dispatch(changQuantity({ id, quantity }));
  }, [quantity, id, dispatch]);

  const handleChangeQuantity = (e) => {
    if (!e.target.value) {
      setInputValue(" ");
    } else {
      setInputValue(parseInt(e.target.value));
    }
  };

  const handleBlur = () => {
    if (inputValue <= 0) {
      setInputValue(1);
      setQuantity(1);
    } else {
      setQuantity(inputValue);
    }
  };

  const handleIncrease = () => {
    setInputValue(inputValue + 1);
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (inputValue <= 1) {
      setInputValue(1);
      setQuantity(1);
    } else {
      setInputValue(inputValue - 1);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-quantity-btn">
      <button className="product-btn-minus" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        className={`product-input ${isCartPage ? "inCart" : ""}`}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleChangeQuantity}
      />
      <button className="product-btn-plus" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default Quantity;
