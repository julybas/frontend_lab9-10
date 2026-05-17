import React, { useState } from "react";
import TrainCard from "./TrainCard";
import { trains } from "../data/trains";

const TrainList = () => {
  const [f, setF] = useState({
    query: "",
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const updateF = (field, value) =>
    setF((prev) => ({ ...prev, [field]: value }));

  const filteredTrains = trains.filter((t) => {
    const match = (val, search) =>
      !search || (val && val.toLowerCase().includes(search.toLowerCase()));

    return (
      (match(t.number, f.query) ||
        match(t.from, f.query) ||
        match(t.to, f.query)) &&
      match(t.from, f.from) &&
      match(t.to, f.to) &&
      (!f.date || t.departureDate === f.date) &&
      (!f.time || (t.departureTime && t.departureTime.startsWith(f.time)))
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук..."
        value={f.query}
        onChange={(e) => updateF("query", e.target.value)}
      />

      <div>
        {trains.length === 0 ? (
          <p>Список потягів порожній.</p>
        ) : filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <p>За заданими параметрами рейсів не знайдено</p>
        )}
      </div>
    </div>
  );
};

export default TrainList;
