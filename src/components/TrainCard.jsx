import React from "react";

const TrainCard = ({ train }) => {
  return (
    <div>
      <h3>Потяг: {train.number}</h3>
      <p>
        <strong>Маршрут:</strong> {train.route}
      </p>
      <p>
        <strong>Відправлення:</strong> {train.departure}
      </p>
      <p>
        <strong>Тривалість:</strong> {train.duration}
      </p>
    </div>
  );
};

export default TrainCard;
