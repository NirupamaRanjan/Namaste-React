{/* <div id="parent">
     <div id="child">
         <h1>
             This is h1 tag in child
         </h1>
         <h2>
             This is h2 tag in child
         </h2>

     </div>
     <div id="child2">
     <h1>
         This is h1 tag in child2
     </h1>
     <h2>
         This is h2 tag in child2
     </h2>

 </div>
</div> */}



const header=React.createElement("h1",{
    id:"heading",
    attr1:"attribute 1"
   },
  [React.createElement("div",{id:"child"},
         [React.createElement("h1",{},"This is h1 tag in child"),
         React.createElement("h2",{},"This is h2 tag in child")]), 
   React.createElement("div",{id:"child2"}, 
       [React.createElement("h1",{},"This is h1 tag in child2"),
       React.createElement("h2",{},"This is h2 tag in child2")])]
       )

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(header)