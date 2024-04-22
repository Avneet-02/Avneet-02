import React,{useState} from "react";

const Colors = () => {
  const [color, setColor] = useState("");
  const [displayText, setDisplayText] = useState('');
  

  const handleColorClick = (chosenColor) => {
    setColor(chosenColor);
    setDisplayText(`My favorite color is ${chosenColor}`);
  };
  return (
    <>
    <div className="top">
      <div style={{ backgroundColor: color, padding: "20px" }}>
        <button onClick={() => handleColorClick("red")}>Red</button>
        <button onClick={() => handleColorClick("blue")}>Blue</button>
        <button onClick={() => handleColorClick("green")}>Green</button>
        <button onClick={() => handleColorClick("pink")}>Pink</button>
        <h1>{displayText}</h1>
      </div>
      </div>
    </>
  );
};
export default Colors;
