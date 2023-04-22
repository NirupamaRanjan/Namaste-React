// In this chapter we learnt about react and react-dom package
//Super Powers of parcel

import React from "react";
import ReactDOM from "react-dom/client"

const root= document.getElementById("root")
const heading=React.createElement("h1",{id:"heading"},"Heading created by react !!!")

const rootElement=ReactDOM.createRoot(root);
rootElement.render(heading)
