import React, { useState, useEffect } from 'react';
import styles from './style.css';

export default function Header() {
  useEffect(() => {

  }, []);

  return (
    <header>
      <div className="logo"><i class="fab fa-youtube"></i></div>
      <div className="course"><strong>Web Design com Adobe XD, Bootstrap, GIMP, HTML e Photoshop</strong></div>
      <div className="user">
        <strong>Marcelo Rossini</strong>
        <img src="https://scontent.fbau5-1.fna.fbcdn.net/v/t1.0-9/s960x960/35416001_1728726293847385_529837314642280448_o.jpg?_nc_cat=103&_nc_ohc=wZoXB_MEb-QAX8UpOLM&_nc_ht=scontent.fbau5-1.fna&oh=983f5f9551c088d707656e3a466f2744&oe=5EC98F15"/>
      </div>
    </header>
  );
}
