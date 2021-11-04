import React, { useState,Fragment } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';


const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const OverviewFlow = () => {
    const [isAnim,setIsAnim]=useState(true)

    const initialElements= [
    
        //Input 
        
        {
          id: '1',
          sourcePosition: 'right',
          style: {
            background: "#7393B3",
            width: 30,
            color: "#fff",
            fontSize: "25px",
            fontFamily: "Helvetica",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
          },
          type: 'input',
          data: {
            label: (
              <>
               X1
              </>
            ),
          },
          position: { x: -350, y: -150 },
        },
        {
            id: '2',
            sourcePosition: 'right',
            style: {
                background: "#7393B3",
                width: 30,
                color: "#fff",
                fontSize: "25px",
                fontFamily: "Helvetica",
                boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
              },
            type: 'input',
            data: {
              label: (
                <>
                X2
                </>
              ),
            },
            position: { x: -350, y: 0 },
        },
        {
            id: '3',
            sourcePosition: 'right',
            style: {
                background: "#7393B3",
                width: 30,
                color: "#fff",
                fontSize: "25px",
                fontFamily: "Helvetica",
                boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
              },
            type: 'input',
            data: {
              label: (
                <>
                  X3
                </>
              ),
            },
            position: { x: -350, y: 150 },
        },
    
        // Output
        
        {
          id: '4',
          sourcePosition: 'right',
          targetPosition: 'left',
          style: {
            background: "#097969",
            width: 30,
            color: "#fff",
            fontSize: "25px",
            fontFamily: "Helvetica",
            boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
          },
          type: 'output',
          data: {
            label: (
              <>
                Y
              </>
            ),
          },
          position: { x: 75, y: 0 },
        },
    
        //Bitmap
    
        // {
        //     id: '5',
        //     sourcePosition: 'right',
        //     targetPosition: 'left',
        //     style: {
        //       background: "#AA336A",
        //       height:60,
        //       color: "#fff",
        //       fontFamily: "Helvetica",
        //       boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
        //     },
        //     data: {
        //       label: (
        //         <>
        //           Hello <br />
        //           Hi <br />
        //           Bye
        //         </>
        //       ),
        //     },
        //     position: { x: -600, y:-100 },
        //   },
    
          {
            id: '8',
            sourcePosition: 'right',
            targetPosition: 'left',
            style: {
              background: "#AA336A",
              height:60,
              color: "#fff",
              fontFamily: "Helvetica",
              boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
            },
            data: {
              label: (
                <>
                  X- Features <br />
                  H- Hidden Layers<br />
                  Y- Output
                </>
              ),
            },
            position: { x: 150, y:-200 },
          },
    
          //Hidden
          {
            id: '6',
            sourcePosition: 'right',
            targetPosition: 'left',
            style: {
                background: "#FA8072",
                width: 30,
                color: "#fff",
                fontSize: "25px",
                fontFamily: "Helvetica",
                boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
              },
            data: {
              label: (
                <>
                  H1
                </>
              ),
            },
            position: { x: -150, y: -75 },
        },
        {
            id: '7',
            sourcePosition: 'right',
            targetPosition: 'left',
            style: {
                background: "#FA8072",
                width: 30,
                color: "#fff",
                fontSize: "25px",
                fontFamily: "Helvetica",
                boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
              },
            data: {
              label: (
                <>
                  H2
                </>
              ),
            },
            position: { x: -150, y: 75 },
        },
      
        
        //Connections
        { id: 'e1-6', source: '1', target: '6' ,animated: isAnim},
        { id: 'e2-6', source: '2', target: '6' ,animated: isAnim},
        { id: 'e3-6', source: '3', target: '6' ,animated: isAnim},
        { id: 'e1-7', source: '1', target: '7' ,animated: isAnim},
        { id: 'e2-7', source: '2', target: '7' ,animated: isAnim},
        { id: 'e3-7', source: '3', target: '7' ,animated: isAnim},
        { id: 'e6-4a', source: '6', target: '4' ,animated: isAnim,style: { stroke: '#f6ab6c' },},
        { id: 'e6-4b', source: '6', target: '4' ,animated: isAnim,style: { stroke: '#f6ab6c' },},
        { id: 'e7-4a', source: '7', target: '4' ,animated: isAnim,style: { stroke: '#f6ab6c' },},
        { id: 'e7-4b', source: '7', target: '4' ,animated: isAnim,style: { stroke: '#f6ab6c' },},
    
      ];
      
      
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const lol = () => {
    console.log("Ughhhhh")  
    setIsAnim(false);
    }

  return (
      <Fragment>
      <div className="Diag" style={{height:500}}>
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return '#023020';
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
    {/* <button onClick={lol} >Start </button>
    <button >Stop </button> */}
    </div>
    </Fragment>
  );
};

export default OverviewFlow;