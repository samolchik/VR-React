
import React from 'react'
import "./video.css"


import VideoImg from "../../assets/images/Video/video.png";

export const Video = () => {
  return (
    <section className="video">
      <div className="video__content">
        <h3 className="video__content-title">Awesome experiences with virtual reality world</h3>
        <div className="video__content-img">
          <img src={VideoImg} alt="video" />
        </div>
      </div>
    </section>
  )
}

