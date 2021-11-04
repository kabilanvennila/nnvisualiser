import './App.css';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Plot from './Plot';
import Plot1 from './Plot1';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor:'#28282B',
    color: theme.palette.text.secondary,
  }));


function Train() {
  return (
    <div className="start">
    <Button variant="contained" endIcon={<SendIcon />}>
    Start Training
    </Button>
    <Grid container spacing={3} paddingTop={4}>
        <Grid item xs={6}>
            <Item>
            <h3 style={{color:'white'}}>Training data</h3>
            <Plot/>
            </Item>
        </Grid>
        <Grid item xs={6}>
            <Item>
            <h3 style={{color:'white'}}>Epochs</h3>
            <Plot1/>
            </Item>
        </Grid>
    </Grid>
    
    </div>
  );
}

export default Train;
