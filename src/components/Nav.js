import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><i class="fas fa-bars" style={{color:"#E2B200", fontSize:"40px", padding:"2.5%", zIndex:"10"}}></i></Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} >
        <a href="#people" style={{textDecoration: "none", color: "black"}} onClick={toggleDrawer('right', false)}><div style={{width: "300px", textAlign: "center", fontSize:"30px", padding:"10%", textAlign: "left"}}>People</div></a>
				<Divider />
				<a href="#planets" style={{textDecoration: "none", color: "black"}} onClick={toggleDrawer('right', false)}><div style={{textAlign: "center", fontSize:"30px", padding:"10%", textAlign: "left"}}>Planets</div></a>
				<Divider />
				<a href="#starships" style={{textDecoration: "none", color: "black"}} onClick={toggleDrawer('right', false)}><div style={{textAlign: "center", fontSize:"30px", padding:"10%", textAlign: "left"}}>Starships</div></a>
				<Divider />
				<a href="#search" style={{textDecoration: "none", color: "black"}} onClick={toggleDrawer('right', false)}><div style={{textAlign: "center", fontSize:"30px", padding:"10%", textAlign: "left"}}><i class="fas fa-search"></i> Search </div></a>
				<Divider />
      </Drawer>
    </div>
  );
}
