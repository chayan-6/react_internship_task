import React, { useState } from "react";
import "./tailwind.css";


const Matrix=()=>{

const[colors,setcolors]=useState(Array(9).fill("white"))
const[clicked,setclicked]=useState([]);
const changecolor = (index) => {
  if (colors[index] === "green" || colors[index] === "orange") return;
  
  const newClicked = [...clicked, index]; 
  setclicked(newClicked);

  const copy_colors = [...colors];
  copy_colors[index] = "green";
  setcolors(copy_colors);

  if (index === 8) {
    newClicked.forEach((idx, i) => {
      setTimeout(() => {
        setcolors((prevColors) => {
          const newColors = [...prevColors];
          newColors[idx] = "orange";
          return newColors;
        });
      }, i * 500);
    });
  }
};


return(
    <div className="grid-container">
        {colors.map((color,index)=>{
            return(
            <div   key={index}
            className="grid-box"
            style={{ backgroundColor: color }}
            onClick={() => changecolor(index)}>
                 {index+1}
            </div>
            )
        })}
    </div>
)
}
export default Matrix
