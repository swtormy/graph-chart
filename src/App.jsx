import React from "react";
import "./App.css";
import Graph from "react-vis-network-graph";

function App() {
  const graph = {
    nodes: [
      { id: 1, label: "Node1", title: "Node 1", shape: "circle" },
      { id: 2, label: "Node2", title: "Node 1", shape: "circle" },
      { id: 3, label: "Node3", title: "Node 1", shape: "circle" },
      { id: 4, label: "Node4", title: "Node 1", shape: "circle" },
      { id: 5, label: "Node5", title: "Node 1", shape: "circle" },
      { id: 6, label: "Node6", title: "Node 1", shape: "circle" }
    ],
    edges: [
      { from: 1, to: 3 },
      { from: 3, to: 2 },
      { from: 2, to: 1 },
      { from: 4, to: 1 },
      { from: 5, to: 1 },
      { from: 6, to: 1 },
    ],
  };
  const options = {
    edges: {
      color: "black"
    },
    nodes: {
      physics: true,
      scaling: {
        min: 10,
        max: 100,
      }
    },
    height: "100%",

  };
  return (
    <div className="App">
      <Graph
        graph={graph}
        options={options} events={{ click: (e) => console.log(e) }} getNodes={(e) => console.log(e)}
        getNetwork={network =>
          console.log(network)
        }
      />
    </div>
  );
}

export default App;
