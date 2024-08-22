// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "HEllo World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);





const parent = React.createElement("div", { id: "parent" }, [
React.createElement("div", { id: "child" }, 
[React.createElement("h1", {}, "I am h1 tag from parent and Child"),
 React.createElement("h2",{}, "i am h2 tag") ]
), 
 React.createElement("div", { id: "child" }, 
[React.createElement("h1", {}, "I am h1 tag from parent and Child"), 
React.createElement("h2",{}, "i am h2 tag") ]
)]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);