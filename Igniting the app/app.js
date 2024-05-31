import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"Im h2 tag")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"Im h1 tag"),React.createElement("h2",{},"Im h2 tag")]
    )]
)


const heading = React.createElement("h1",{id:"heading"},"Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 