import React from "react";
import TrainList from "../components/TrainList";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Розклад потягів</h1>
      <TrainList />
    </div>
  );
};

export default Home;
