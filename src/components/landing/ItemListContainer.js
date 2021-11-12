import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PlaceHolder from "./placeholder.jpeg";
import ItemCount from "../ItemCount";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ItemListContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{
          color: "black",
          width: "1000px",
          margin: "auto",
          padding: "50px 20px 20px 20px",
        }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              {" "}
              <img
                src={PlaceHolder}
                alt="Logo"
                style={{ maxWidth: 250 }}
              />{" "}
              <p>$576 </p>
              Maceta placeholder
              <ItemCount stock={5} initial={1} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
