import Alert from "@mui/material/Alert";
import { Container } from "@mui/material";
export default function AlertWrapper(severity, message) {
  return (
    <Container style={{ marginTop: "5%" }}>
      <Alert open={true} severity={severity}>
        {message}
      </Alert>
    </Container>
  );
}
