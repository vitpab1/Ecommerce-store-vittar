import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./logo.png";

import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "lightblue", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 0.5 }}>
            <img src={logo} alt="Logo" style={{ maxWidth: 60 }} />{" "}
            Sayonara-Macetas
          </Typography>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Preguntas Frecuentes </Button>
          <Button color="inherit">Venta Mayorista</Button>
          <Button color="inherit">Contacto</Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
