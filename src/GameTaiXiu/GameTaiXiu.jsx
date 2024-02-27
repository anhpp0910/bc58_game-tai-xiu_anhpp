import React, { Component } from "react";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
import bgGame from "./assets/bgGame.png";
import "./style.css";

export default class GameTaiXiu extends Component {
  render() {
    return (
      <div className="gameContainer" style={{ background: `url(${bgGame})` }}>
        <XucXac />
        <KetQua />
      </div>
    );
  }
}

// 4-10 xỉu
