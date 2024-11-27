import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Job Scheduler
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Submit Job
      </Button>
      <Button color="inherit" component={Link} to="/status">
        Job Status
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
