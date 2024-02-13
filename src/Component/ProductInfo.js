import UtilApi from "../UtilApi";
import { useLocation } from "react-router-dom";
export default function ProductInfo() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
 

}
