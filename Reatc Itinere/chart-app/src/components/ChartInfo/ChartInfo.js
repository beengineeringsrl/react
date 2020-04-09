import React from "react";

const ChartInfo = ({ weight, height, id, date, bmi, deleteCard }) => {
  const handleDelete = (e) => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            Chart: {bmi}
          </span>
          <div className="card-data">
            <span data-test="weight">Weight: {weight} kg</span>
            <span data-test="height">Height: {height} cm</span>
            <span data-test="date">Date: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartInfo;
