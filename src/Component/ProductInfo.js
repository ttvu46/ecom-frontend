import { useEffect, useState } from "react";
import UtilApi from "../UtilApi";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@mui/material";
import MenuAppBar from "./AppBar";
import NumberInput from "./NumberInput";

export default function ProductInfo() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const [productQuantity, setProductQuantity] = useState(1);
  const [productInfo, setProductInfo] = useState({});
  const navigate = useNavigate();
  const getProduct = async () => {
    const token = UtilApi.getToken();
    try {
      const product = await UtilApi.getProductInfo(productId, token);
      setProductInfo(product);
    } catch (e) {
      const statusCode = Number(e.message);

      if (statusCode < 500 && statusCode >= 400) {
        navigate("/signin");
      }
    }
  };

  const addToCartAction = () => {
    console.log("hIHIHI");
    console.log(productQuantity);
    console.log(productId);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <MenuAppBar />
      {productInfo && (
        <Container style={{ width: "90%", height: "100%" }}>
          <Grid container spacing={2}>
            <Grid style={{ display: "flex", paddingTop: "10%" }} item xs={6}>
              <img height="350px" src={productInfo.url}></img>
            </Grid>
            <Grid item xs={6} style={{ paddingTop: "6%" }}>
              <Typography variant="h4">{productInfo.productName}</Typography>

              <p>{productInfo.description}</p>
              <Container style={{ marginTop: "50px" }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid style={{ paddingRight: "15px" }}>
                    <NumberInput setProductQuantity={setProductQuantity} />
                  </Grid>
                  <Grid>
                    <Button
                      onClick={addToCartAction}
                      variant="contained"
                      color="success"
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
