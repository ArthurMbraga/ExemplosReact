import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [boxList, setBoxList] = useState([{ number: 1 }, { number: 2 }]);

  function addBox() {
    const number = Math.ceil(Math.random() * 10);
    const newBox = { number };

    const newBoxList = [...boxList];
    newBoxList.push(newBox);

    setBoxList(newBoxList);
  }

  function addOne() {}

  return (
    <>
      {boxList.map((box, index) => {
        return <Box number={box.number} />;
      })}
      <button onClick={() => addBox()}>Add Caixa</button>
      <button onClick={() => addOne()}>Add 1</button>
    </>
  );
}

export default App;
