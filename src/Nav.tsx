import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { navigateToUrl } from "single-spa";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    navbutton: {
      marginLeft: "auto",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Nav() {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState<string>("none");

  const handleClick = (url: string): void => {
    navigateToUrl(url);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography
            onClick={() => handleClick("/angular/home")}
            variant="h6"
            noWrap
          >
            FutureMarket
          </Typography>
       
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <Toolbar />
        <div id="single-spa-application:app-angular"></div>
        <div id="single-spa-application:app-react"></div>
      </main>
    </div>
  );
}
