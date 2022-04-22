import React, { useState, useEffect } from "react";
import env from "react-dotenv";

import Recipies from "./components/recipies";
import recipie_style from "./components/recipies.style.css";
import style_form from "./components/form.style.css";

export default function Html() {
  const [recipies, setRecipies] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "0c###e"; //use own API_ID from the website edamam.com
  const APP_KEY = "c169d7931####9c9e"; //use own API_Key from the website edamam.com
  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log("Use Effect has been called.");
    getRecipies();
  }, [query]); // second argument makes app req to render one time,  not more than one times

  const getRecipies = async () => {
    const response = await fetch(req);
    const data = await response.json();
    setRecipies(data.hits); //data store in the recipie using setRecipe
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onClickForm = (e) => {
    e.preventDefault();
    setQuery(search); //when search anything wrote and then submit then this query will search
    setSearch("");
  };

  return (
    <div>
      <div className="form_main_div">
        <h1>Search Food Items: </h1>
        <form action="" className="search_form" onSubmit={onClickForm}>
          <div className="search_box">
            <input
              type="text"
              name="searchText"
              id="searchText"
              value={search}
              onChange={onChangeSearch}
              placeholder="Search"
            />

            <button type="submit">Click Me</button>
          </div>
        </form>
      </div>

      <div className="recipie_div">
        {recipies.map((recipie, index) => (
          <Recipies
            key={index}
            title={recipie.recipe.label}
            description={recipie.recipe.mealType[0]}
            img={recipie.recipe.image}
            calories={recipie.recipe.calories}
          />
        ))}
      </div>
    </div>
  );
}
