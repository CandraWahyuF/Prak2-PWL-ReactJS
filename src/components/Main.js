import {
  Facebook,
  Instagram,
  LinkedIn,
  MenuBook,
  Pinterest,
  SettingsPowerRounded,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./styles/Main.scss";
import man from "./assets/patrik22.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hello World !</p>
            <h1>I'm Candra</h1>
            <p>Praktikum Pemrograman Web Lanjut</p>

            <div className="icons">
              <Twitter className="icon" />
              <Instagram className="icon" />
              <Facebook className="icon" />
              <YouTube className="icon" />
              <LinkedIn className="icon" />
            </div>

            <div className="buttons">
              <button>Empty</button>
              <button>Contact ME</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
