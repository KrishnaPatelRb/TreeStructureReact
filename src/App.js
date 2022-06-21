import React from "react";
import Person from "./Person";
import Person2 from "./Person2";
import Child from "./Child";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Person firstName="2000" lastName="Vance" />
      <Person firstName="2000" lastName="Scott" />
      <Person firstName="359" lastName="Scott" />

      <br></br>
      <Child heightx="200" widthx="200" />
      <br></br>
      <Person2 firstName="VM 01" lastName="Shrute" />
      <Person2 firstName="VM 01" lastName="Shrute" />
    </div>
  );
}

export default App;
