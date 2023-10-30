import * as React from "react";
import Image from "next/image";
import pic from "../../public/Furlong Painting Logo.png";
import SideBar from "../../module 1/SideBar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
  Typography,
} from "@material-ui/core";
import {  useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Quiz from "../../module 1/Quiz";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const drawerWidth = 350;

export default function Main(props) {
  const { window } = props;
  const[secondModule,setSecondModule]=React.useState(false);
  const[thirdModule,setThirdModule]=React.useState(false);
  const[fourthModule,setFourthModule]=React.useState(false);
  const[fifthModule,setFifthModule]=React.useState(false);

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [option, setOption] = React.useState({
    name: "Conditions of Engagement",
    url: "https://docs.google.com/document/d/e/2PACX-1vRlLLQ_cxYPe5ysNkaeJr8EMb-UcN84_RLcL-_3NFzoAp6i9fUxcR-ZBr2ycxISTY4G-inck1-ZZ3J5/pub?embedded=true",
  });
 
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  
  const [show,setShow]=React.useState(false)
 console.log("ppppp",option);
  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#106786",

          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
          },
          
          width: sm ? `calc(100% - ${drawerWidth}px)` : "100%" 

        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{
              
              marginRight: theme.spacing(2),
              display:sm?"none":true
              
            }}
          >
            <MenuIcon style={{ color: "white",width:"50px",height:"50px" }} />
          </IconButton>

          <Box
            variant="h6"
            
            style={{
              color: "white",
              paddingLeft:"10px"
            }}
          >
            <Typography style={{fontSize:"20px"}}>
            Furlong Painting Contractor Induction Program
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <nav
        
        aria-label="mailbox folders"
      >
        
        <Hidden smUp implementation="css">
          {/* This drawer is for mobile responsive version */}
          <Drawer
          
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div style={{ width: "280px" }}>
              <Image height={59} src={pic} alt="" />
              <Divider />
              <div />

              <SideBar setOption={setOption} show={show} setShow={setShow} secondModule={secondModule} thirdModule={thirdModule} fourthModule={fourthModule} fifthModule={fifthModule} />
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer style={{ width: drawerWidth }} variant="permanent" open>
            <div style={{ width: "350px" }}>
              <Image height={59} src={pic} alt="" />
              <Divider />
              <div />
              <SideBar setOption={setOption} show={show} setShow={setShow} secondModule={secondModule} thirdModule={thirdModule} fourthModule={fourthModule} fifthModule={fifthModule}/>
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <main style={{ flexGrow: 1, padding: theme.spacing(12),paddingTop:"18%",paddingLeft:"15%",height:'100%' }}>
        
       {option?.url ? (
          <div
            style={{ width: "100%", overflow: "hidden", paddingTop: "56.25%"}}
          >
            {isLoading && (
              <div style={{padding:"50px 50px 50px 50px"}}>
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
                height: "150%",
                border: "none",
              }}
              onLoad={handleIframeLoad}
              scrolling="yes"
              src={option?.url}
            ></iframe>
          </div>
        ) : option?.quiz ? (
          <Quiz option={option} setShow={setShow} setSecondModule={setSecondModule} setThirdModule={setThirdModule} setFourthModule={setFourthModule} setFifthModule={setFifthModule}/>
        ) : (
        <Box style={{ overflow: "hidden", width:"60%",height:"120%",border:"2px solid #106786",padding:"6% 6% 6% 6%",borderRadius:"10px" }}>
          <Box style={{padding:"10px 10px 10px 10px"}}>
        <center>
          <Box style={{border:"2px solid var(--light-other-outlined-border-23-p, rgba(0, 0, 0, 0.23))",borderRadius:"50%",width:"70px",height:"70px"}} >
            <LockOutlinedIcon style={{fontSize:"37px",marginTop:"15px"}}/></Box>
          <Typography style={{fontWeight:"bold",fontSize:"20px",paddingBottom:"7px"}}>Please complete previous module</Typography>
          <Typography style={{fontSize:"17px",color:"#00000099",paddingBottom:"28px"}}>Complete the previous module before starting this one.</Typography>
          <Button variant="outlined"  style={{borderColor:"#005D7E"}}><Typography style={{color:"#106786"}}>Go To Previous Module</Typography>
          </Button>
        </center>
        </Box>
      </Box>
      )
        
        }
       
      </main>
    </div>
  );
}

