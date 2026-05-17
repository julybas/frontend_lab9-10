import React from "react";

const TrainCard = ({ train }) => {
  return (
    <div className="uz-card">
      <h3 className="uz-train-number">🚆 {train.number}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div>
          <div style={{ color: "var(--uz-gray)", fontSize: "14px" }}>
            {train.departureDate}
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "var(--uz-blue)",
            }}
          >
            {train.departureTime}
          </div>
          <div style={{ fontSize: "18px", fontWeight: "600" }}>
            {train.from}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--uz-gray)",
          }}
        >
          <span style={{ fontSize: "14px" }}>{train.duration}</span>
          <span>⟶</span>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ color: "var(--uz-gray)", fontSize: "14px" }}>
            {train.arrivalDate}
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "var(--uz-blue)",
            }}
          >
            {train.arrivalTime}
          </div>
          <div style={{ fontSize: "18px", fontWeight: "600" }}>{train.to}</div>
        </div>
      </div>
    </div>
  );
};

export default TrainCard;
