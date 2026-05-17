import React, { useState } from "react";
import TrainCard from "./TrainCard";
import { trains } from "../data/trains";

const TrainList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrains = trains.filter(
    (train) =>
      train.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      train.number.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredTrains.map((train) => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default TrainList;
