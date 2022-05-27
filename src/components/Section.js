import React from "react";
import "./styles/Section.scss";
import man2 from "./assets/patrik1.png";

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={man2} alt="" />
        </div>

        <div className="section__content">
          <h1>Mata Kuliah</h1>
          <p>Pemrograman Web Lanjut</p>
          <p>Pengembangan Aplikasi Mobile</p>
          <p>Proyek Teknologi Informasi</p>
          <p>Kriptografi</p>
          <p>Pembelajaran Mesin</p>
          <p>Kewirausahaan</p>
          <p>Kapita Selekta</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
