import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import ChartForm from "../ChartForm/ChartForm";
import ChartInfo from "../ChartInfo/ChartInfo";
import { LOCAL_STORAGE_META } from "../Config/Constant";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

const uuidv1 = require("uuid/v4");

const App = () => {
  let initialState = () =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_META.DATA_KEY)) || [];

  const [state, setState] = React.useState(initialState);
  const [data, setData] = React.useState({});

  const handleChange = (val) => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv1();
    let newVal = [...state, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    setState(newVal);
  };

  const handleDelete = (id) => {
    localStorage.setItem("lastState", JSON.stringify(state));
    let newState = state.filter((i) => {
      return i.id !== id;
    });
    setState(newState);
  };

  const handleUndo = (evt) => {
    setState(JSON.parse(localStorage.getItem("lastState")));
  };

  return (
    <div className="App">
      <ChartForm change={handleChange} />
      <ChartBar />
      <div className="data-container row">
        {state.length > 0 ? (
          <>
            {state.map((info) => (
              <ChartInfo
                key={info.id}
                id={info.id}
                weight={info.weight}
                height={info.height}
                date={info.date}
                bmi={info.bmi}
                deleteCard={handleDelete}
              />
            ))}
          </>
        ) : (
          <div className="center white-text">No log found</div>
        )}
      </div>
    </div>
  );
};

export default App;
