import './App.css';

import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Slider } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
// import Plot from './Plot';
// import Plot1 from './Plot1';
// import { Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import Paper from '@mui/material/Paper';
import * as tfvis from '@tensorflow/tfjs-vis'
import * as tf from '@tensorflow/tfjs';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor:'#28282B',
    color: theme.palette.text.secondary,
  }));

  const notify = () => toast("heyy🤩 you can use ` (backtick): which Shows or hides the training status and free to explore the NeuralNetwork 🎉 !");


function Train() {

  const [pred,setPred]=useState(null)
  const [value, setValue] = useState(10);
  const [value1, setValue1] = useState(32);

  const handleChange = (event, newValue) => {
  if (typeof newValue === 'number') {
    setValue(newValue);
  }
};
const handleChange1 = (event, newValue) => {
  if (typeof newValue === 'number') {
    setValue1(newValue);
  }
};
  
  const myVis = () => {
    notify();
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  
    const container = { 
      name: 'Model Training', 
      styles: { 
           height: '1000px' 
      }};  
   
      const metrics = ['loss', 'val_loss', 'acc', 'val_acc']
       
      const fitCallbacks = tfvis.show.fitCallbacks(container, metrics)   
        
      const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
      const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
      const testXs = tf.tensor2d([-1, 0, 6, 8,9 , 18], [6, 1]);
      const testYs = tf.tensor2d([-2, -3, 7, 9, 5, 90], [6, 1]);
      
      model.fit(xs, ys, {
      batchSize: 32,
      epochs: value,
      validationData: [testXs, testYs],
      shuffle: true,
      callbacks: fitCallbacks
    });
    // const predt=model.predict(tf.tensor2d([20], [1, 1])).dataSync()
    // setPred(predt)
   };
   

  return (
    <div className="start">
    <div style={{width:300}}>
    <h3>Set Number of Epochs</h3>
    <Slider 
    value={value}
    aria-label="Epochs"
    defaultValue={value}
    valueLabelDisplay="auto"
    step={40}
    marks
    min={20}
    max={800}
    onChange={handleChange}
  />  
  </div>
  <div style={{width:300}}>
    <h3>Set Batch Size</h3>
    <Slider 
    value={value1}
    aria-label="Batch Size"
    defaultValue={value1}
    valueLabelDisplay="auto"
    step={32}
    marks
    min={8}
    max={256}
    onChange={handleChange1}
  />  
  </div>
  <ToastContainer
          position="top-center"
          autoClose={9000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <Button onClick={myVis} variant="contained" endIcon={<SendIcon />}>
    Start Training
    </Button>

    {/* <Grid container spacing={3} paddingTop={4}>
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
    </Grid> */}
    
    </div>
  );
}

export default Train;
