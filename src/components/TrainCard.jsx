import React from "react";

const TrainCard = ({ train }) => {
  return (
    <div>
      <h3>🚆 {train.number}</h3>

      <div>
        <div>
          <div>{train.departureDate}</div>
          <div>{train.departureTime}</div>
          <div>{train.from}</div>
        </div>

        <div>
          <span>{train.duration}</span>
          <span>⟶</span>
        </div>

        <div>
          <div>{train.arrivalDate}</div>
          <div>{train.arrivalTime}</div>
          <div>{train.to}</div>
        </div>
      </div>
    </div>
  );
};

export default TrainCard;
