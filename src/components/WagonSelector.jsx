import React from "react";

const WagonSelector = ({ selectedWagon, setSelectedWagon }) => {
  return (
    <div className="wagon-section">
      <h3>Оберіть вагон:</h3>
      <div className="wagon-selector">
        {[1, 2, 3].map((w) => (
          <button
            key={w}
            onClick={() => setSelectedWagon(w)}
            className={`wagon-btn ${selectedWagon === w ? "active" : ""}`}
          >
            Вагон {w}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WagonSelector;
