import React, { useState } from "react";

import style_form from "./form.style.css";

export default function Form(props) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chiken");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onClickForm = (e) => {
    e.preventDefault();
    setQuery(search); //when search anything wrote and then submit then this query will search
  };

  props.sendQueryData(query);

  return (
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
  );
}
