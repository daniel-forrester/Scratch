import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import axios from "axios";
import getUserId from "../snippets/getUserId";
import { Card, CardActionArea } from "@material-ui/core";

const CartPage = () => {
  //api request to get the cart id or check cart state
  // const cart = [2, 2, 2, 2];
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      const userId = await getUserId();

      const res = await axios.get(`/api/carts/user/${userId}`);

      const cart = res.data.userCart;
      setCarts(cart);
    };

    getCarts();
  }, []);
  /**
   * TODO: Render tems
   */
  carts.map((item) => console.log(item));
  return (
    <div>
      <h1>Cart</h1>
      {carts.length === 0 ? (
        <div>"cart is empty"</div>
      ) : (
        carts.map((item, ind) => {
          <CartItem key={ind} item={item} />;
        })
      )}
      {/* <CartTotal /> */}
    </div>
  );
};

export default CartPage;