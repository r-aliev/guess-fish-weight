import React from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const Header = () => {
  return (
    <Grid spacing={2} sx={{ flexGrow: 1 }} style={{marginBottom: 20}}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Fish Weight guess
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Grid>
  );
};

export default Header;
