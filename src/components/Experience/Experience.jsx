import React from 'react';
import "./experience.css"

import WomanImg from '../../assets/images/Experience/woman.png'
import ManImg from '../../assets/images/Experience/man.png'

export const Experience = () => {
  return (
    <section className="experience">
    <div className="experience-photo">
      <img src={WomanImg} className="experience-photo__women" alt="woman" />
      <img src={ManImg} className="experience-photo__men" alt="man" />
    </div>
    <div className="experience-content">
      <h2 className="experience-content__title">New Experience In Playing Game</h2>
      <p className="experience-content__describe">
        You can try playing the game with a new style and of course a more
        real feel, like you are the main character in your game and
        adventure in this new digital world.
      </p>
      <button className="experience-btn" id="experienceBtn">Get it Now</button>
    </div>
  </section>
  )
}

