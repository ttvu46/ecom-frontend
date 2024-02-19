import UtilApi from "../UtilApi";
import { useEffect, useState } from "react";
import MenuAppBar from "./AppBar";
import CartTable from "./CartTable";
import { useNavigate } from "react-router-dom";

export default function Carts() {
  const navigate = useNavigate();
  const [cartItemsNumber, setCartItemNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const getCartItemsNumber = async () => {
    const token = UtilApi.getToken();
    const result = await UtilApi.getCartItemsNumber(token);
    try {
      setCartItemNumber(result);
    } catch (e) {
      setCartItemNumber(0);
    }
  };

  const getCart = async () => {
    const token = UtilApi.getToken();
    try {
      const cart = await UtilApi.getCarts(token);
      setCart(cart);
    } catch (e) {
      navigate("/signin");
    }
  };

  useEffect(() => {
    getCartItemsNumber();
    getCart();
  }, []);

  return (
    <>
      <MenuAppBar cartItemsNumber={cartItemsNumber}></MenuAppBar>
      <CartTable data={cart}></CartTable>
    </>
  );
}
