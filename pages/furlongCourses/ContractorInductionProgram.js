import * as React from "react";
import Image from "next/image";
import pic from "../../public/Furlong Painting Logo.png";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  Toolbar,
  
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Quiz from "../../module 1/Quiz";
import SideBarForContractor from "../../module 1/SideBarForContractor";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const ContractorInductionProgram = (props) => {
    const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [option, setOption] = React.useState({
    name: "Conditions of Engagement",
    url: "https://writer.zohopublic.com/writer/published/0byhd02a3dd33a12e46098c2004068c6c917b?mode=embed",
  });
  const [data, setData] = React.useState(null);

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleOption = (data) => {
    setOption(data);
    setData(data.url);

  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "#106786" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>

          <Box
            variant="h6"
            noWrap
            style={{
              color: "white",
            }}
          >
            Furlong Painting Contractor Induction Program
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          {/* This drawer is for mobile responsive version */}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={{ width: drawerWidth }} 
          >
            <div>
              <Image height={59} src={pic} alt="" />
              <Divider />
              <div />

              <SideBarForContractor handleOption={handleOption} />
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            style={{ width: drawerWidth }} 
          >
            <div>
              <Image height={59} src={pic} alt="" />
              <Divider />
              <div />
              <SideBarForContractor handleOption={handleOption} />
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {option?.url ? (
          <div
            style={{ width: "100%", overflow: "hidden", paddingTop: "56.25%" }}
          >
            {isLoading && (
              <div>
                <center>
                  <CircularProgress />
                </center>
              </div>
            )}
            <iframe
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              onLoad={handleIframeLoad}
              frameborder="0"
              scrolling="yes"
              src={option?.url}
            ></iframe>
          </div>
        ) : option?.quiz ? (
          <Quiz option={option} />
        ) : (
          <div
            style={{ width: "100%", overflow: "hidden", paddingTop: "56.25%" }}
          >
            {isLoading && (
              <div>
                <center>
                  <CircularProgress />
                </center>
              </div>
            )}
            <iframe
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              onLoad={handleIframeLoad}
              frameborder="0"
              scrolling="yes"
              src={
                "https://writer.zohopublic.com/writer/published/0byhd02a3dd33a12e46098c2004068c6c917b?mode=embed"
              }
            ></iframe>
          </div>
        )}
      </main>
    </div>
  );
}



export default ContractorInductionProgram;