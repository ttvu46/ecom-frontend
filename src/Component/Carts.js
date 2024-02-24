import UtilApi from "../UtilApi";
import { useEffect, useState } from "react";
import MenuAppBar from "./AppBar";
import CartTable from "./CartTable";
import { useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux';

export default function Carts() {
  const navigate = useNavigate();
  const totalItems = useSelector((state) => state.cart.totalItems);
  const [cart, setCart] = useState([]);

  //   const getCartItemsNumber = async () => {
  //     const token = UtilApi.getToken();
  //     const result = await UtilApi.getCartItemsNumber(token);
  //     try {
  //       setCartItemNumber(result);
  //     } catch (e) {
  //       setCartItemNumber(0);
  //     }
  //   };

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
    getCart();
  }, []);

  return (
    <>
      <MenuAppBar cartItemsNumber={totalItems}></MenuAppBar>
      <CartTable data={cart}></CartTable>
    </>
  );
}
