import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  return (
    <Card
      key={props.id}
      style={{ margin: "10px" }}
      sx={{ minWidth: 300, maxWidth: 300 }}
    >
      <CardActionArea
        component={Link}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        target="_blank"
        to={`/products?id=${props.id}`}
      >
        <CardMedia
          component="img"
          height="194"
          image={props.url}
          alt={props.productName}
          onClick={(event) => {
            console.log(event);
          }}
        />
        <CardContent>
          <Typography>{props.productName}</Typography>
          <Typography variant="body2" color="text.secondary">
            $ {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
