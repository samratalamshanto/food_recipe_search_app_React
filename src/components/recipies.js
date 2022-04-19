import React from "react";

import styleRecipie from "./recipies.style.css";

export default function recipies(props) {
  const { title, description, img, calories } = props;
  return (
    <div className="main_div_recipie">
      <div className="small_div">
        <h1>Tittle: {title}</h1>
      </div>
      <div className="small_div">
        <h2>Description: {description}</h2>
      </div>
      <div className="small_div">
        <h2>Calories: {calories} Cal.</h2>
      </div>
      <div className="small_div">
        <img src={img} alt="/images/foods" />
      </div>
    </div>
  );
}
