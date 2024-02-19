import * as React from "react";
import {
  TableRow,
  Container,
  TableCell,
  TableBody,
  Table,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function CartTable(props) {
  return (
    <>
      <Container style={{ paddingLeft: "10%" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{ width: "120px" }}
                  component="th"
                  scope="row"
                >
                  <Link to={`/products?id=${row.product.id}`}>
                    <img height="90px" src={row.product.url}></img>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to={`/products?id=${row.product.id}`}>
                    <Typography variant="subtitle1">
                      {row.product.productName}
                    </Typography>
                  </Link>
                  <p>Price: ${row.product.price}</p>
                  <p>Quantity: {row.quantity}</p>
                </TableCell>
                {/* <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Total: $1.23</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </>
  );
}
