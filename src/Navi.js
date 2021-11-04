import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



function Navi() {
  return (
    <div className="Navi">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Neural-Network Visualizer
          </Typography>
          {/* <Button color="inherit" >🎉</Button> */}
          <div style={{fontSize:35}} >🎉</div>
        </Toolbar>
      </AppBar>
    </Box>
    
    </div>
  );
}

export default Navi;
