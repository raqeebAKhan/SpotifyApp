import React from "react";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";
import Center from "./Center";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_center">
        <Sidebar />
        <Center spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;