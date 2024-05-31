import React from "react";
import ReactDOM from "react-dom/client";


/* const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"Im h2 tag")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"Im h1 tag"),React.createElement("h2",{},"Im h2 tag")]
    )]
) */


//const heading =  React.createElement("h1",{id:"heading"},"Hello world from React");

const jsxheading = <h1 id="heading" className="test"> im h1 tag using jsx</h1>;

const Header = ()=> <h1>Im a header Component </h1>

const HeadingComponent= () => (
    <div>
        <Header/>
        {Header()}
        <Header></Header>
        <h1 id="heading" className="test"> im h1 tag using HeadingComponent</h1>
    </div>
); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);  