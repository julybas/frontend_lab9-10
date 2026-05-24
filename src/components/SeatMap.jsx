import React from "react";

const SeatMap = ({ bookedSeats, selectedSeats, toggleSeat }) => {
  const renderSeat = (s) => {
    const isBooked = bookedSeats.includes(s);
    const cssClass = isBooked
      ? "booked"
      : selectedSeats.includes(s)
        ? "selected"
        : "available";
    return (
      <button
        key={s}
        onClick={() => toggleSeat(s)}
        className={`seat-btn ${cssClass}`}
        disabled={isBooked}
      >
        {s}
      </button>
    );
  };

  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => {
        const s = i * 4 + 1;
        return (
          <div key={i}>
            <div>
              {renderSeat(s)}
              {renderSeat(s + 1)}
            </div>
            <div></div>
            <div>
              {renderSeat(s + 2)}
              {renderSeat(s + 3)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeatMap;
