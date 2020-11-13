import React,{useEffect} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
// import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems} from "./listItems";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Admin.css"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#FFFFFF",
  },
  kaka: {
    backgroundColor: "#FFFF00",
  },
  // toolbar: {
  //   paddingRight: 24, // keep right padding when drawer closed
  // },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    // color: "black"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard({history}) {
//   const usuario = useSelector(store => store.user.user)
//   useEffect(() => {
//       if (!usuario.isAdmin) {
//         history.push('/')
//       }
//     }, [usuario])

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
 
      <div className={classes.root}>
        {/* <CssBaseline /> */}
        {/* <AppBar
          position="absolute"
           className={clsx(classes.appBar, open && classes.appBarShift)}
           style={{backgroundColor: "#fdd835", height: "90px"}}
        > */}
           <Toolbar className={classes.toolbar} className={classes.kaka}> 
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )} */}
            
              {/* <MenuIcon /> */}
            {/* </IconButton> */}
             <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title} >
            
              {/* Panel Admin */}
            </Typography> 
          {/* <IconButton color="inherit"> */}
            {/* <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge> */}
          {/* </IconButton> */}
           </Toolbar> 
          {/* </AppBar>  */}
        
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        > 
           {/* <Link to="/" className="logo" onClick={()=> history.push('/')}> */}
                  <h2>
           
                  </h2>
                {/* </Link> */}
         
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
            </Grid>
            {/* <Route
              exact
              path="//" */}
            {/* //   render={() => 
            //     // < />
            // }
            /> */}
{/* 
            <Route
              exact
              path="/admin/"
            //   render={() => < />}
            />
            <Route exact path="/admin/" render={() => < />} />

            <Route exact path="/" component={} />

            <Route exact path="/admin/" component={Navbar} />

            <Route exact path="/admin/" render={() => </>} />
          </Container>
        </main>
*/}
     
     </Container>
     </main>
      </div>
   
  );
}
