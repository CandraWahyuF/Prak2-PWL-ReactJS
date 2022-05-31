import React from "react";
import { ReactTypical } from "@deadcoder0904/react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm{" "}
            </span>
          </div>
          <div className="profile-detail-name">
            <span className="primary-test">
              {""}
              <h1>
                <ReactTypical
                  loop={Infinity}
                  steps={["Candra Wahyu Firmansyah", 50]}
                />
              </h1>
              <span className="profile-role-tagline">
                Tugas Praktikum Pemrograman Web Lanjut.
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">
              {""}
              About Me{""}
            </button>
            <a href="#" download="#">
              <button className="btn highlighted-btn">Contact Me</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
