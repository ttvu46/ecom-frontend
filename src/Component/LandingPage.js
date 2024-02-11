import UtilApi from "../UtilApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LandingPage() {
  const navigate = useNavigate();

  const checkTokenExisted = () => {
    const getToken = UtilApi.getToken();
    if (!getToken || getToken === null) {
      navigate("/signin");
    }
  };

  useEffect(() => {
    checkTokenExisted();
  });

  return <></>;
}
