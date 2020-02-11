import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import styles from './style.css';

export default function Video() {
  useEffect(() => {
    const player = new Plyr('#player',{
      title: 'Bla',
      settings: ['captions', 'quality', 'speed', 'loop'],
      quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }
    });
  }, []);

  return (
    <video id="player" playsinline controls>
      <source src="http://mirrors.standaloneinstaller.com/video-sample/Panasonic_HDC_TM_700_P_50i.mp4" type="video/mp4" />
    </video>
  );
}
