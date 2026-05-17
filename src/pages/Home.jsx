import React from "react";
import TrainList from "../components/TrainList";
import "../App.css";

const Home = () => {
  return (
    <div>
      <header className="uz-header">
        <h1>Укрзалізниця | Квитки</h1>
      </header>
      <main className="uz-container">
        <TrainList />
      </main>
    </div>
  );
};

export default Home;
