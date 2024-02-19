import UtilApi from "../UtilApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
import MenuAppBar from "./AppBar";

export default function ProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartItemsNumber, setCartItemNumber] = useState(0);

  const getProducts = async () => {
    const token = UtilApi.getToken();
    if (!token || token === null) {
      navigate("/signin");
    } else {
      try {
        const result = await UtilApi.productList(token);
        setProducts(result);
      } catch (e) {
        const statusCode = Number(e.message);
        if (statusCode < 500 && statusCode >= 400) {
          navigate("/signin");
        }
      }
    }
  };

  const getCartItemsNumber = async () => {
    const token = UtilApi.getToken();
    const result = await UtilApi.getCartItemsNumber(token);
    try {
      setCartItemNumber(result);
    } catch (e) {
      setCartItemNumber(0);
    }
  };

  useEffect(() => {
    getProducts();
    getCartItemsNumber();
  }, []);

  return (
    <>
      <MenuAppBar cartItemsNumber={cartItemsNumber} />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              id={product.id}
              url={product.url}
              productName={product.productName}
              price={product.price}
            ></ProductCard>
          );
        })}
      </Container>
    </>
  );
}
