// In this chapter we learnt about 
// JSX
// Babel
// React Component

import React from "react";
import ReactDOM from "react-dom/client"

const root= document.getElementById("root")

const titleElement=(<h1>
    This is title Element.
</h1>)

// Functional Component
// We can ommit the return keyword and wrap the jsx inside ()
const Title=()=>(
    <h1>
        This is the title Component.
    </h1>
)

const HeadingComponent=()=>(
    <div className="heading">
       {titleElement}
       {/* we can call the component as a simple function also */}
       {Title()}
       <Title/>
       <Title></Title>
       <h2>This is heading component</h2>    
    </div>
)

const rootElement=ReactDOM.createRoot(root);
rootElement.render(<HeadingComponent/>)
