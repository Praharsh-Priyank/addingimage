import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src="https://img.freepik.com/free-photo/top-view-fast-food-with-copy-space_23-2148273099.jpg?size=626&ext=jpg" />
    <img src={img + "?grayscale"} />
    <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*" />
  </div>,
  document.getElementById("root")
);
