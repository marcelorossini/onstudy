import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import styles from './style.css';

export default function PlyrVideo() {
  useEffect(() => {
    const player = new Plyr('#player',{
      title: 'Bla',
      settings: ['captions', 'quality', 'speed', 'loop'],
      quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }
    });
  }, []);

  return (
    <video id="player" playsinline controls>
      <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
    </video>
  );
}
