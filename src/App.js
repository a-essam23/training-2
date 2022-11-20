// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { React, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import Btn from "./components/Button/Button";
import Blog from "./components/Blog/Blog";

function App() {
  const obj = [
    { Genre: "Food", Title: "BurgerKing", Date: new Date().toUTCString() },
    { Genre: "Music", Title: "HipHop", Date: new Date().toUTCString() },
    { Genre: "Sport", Title: "Soccer", Date: new Date().toUTCString() },
  ];
  const [btnn, setbtnn] = useState(false);
  const handler = () => {
    setbtnn(true);
    setbtnn(<Btn />);
  };
  return (
    <div>
      <Blog info={obj} />
      {<div> {btnn}</div>}
      <Btn action={handler} state={btnn} />
    </div>
  );
}

export default App;
