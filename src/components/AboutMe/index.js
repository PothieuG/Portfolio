// == Import : npm
import React from 'react';

// == Import : local
import './aboutMe.scss';

// == Composant
const AboutMe = () => (
  <div id="aboutMe">
    <div className="aboutMe">
      <h2 className="aboutMe-title">About Me</h2>
      <p className="aboutMe-littleDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab, dignissimos reiciendis fuga porro</p>
      <p className="aboutMe-mainDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui possimus aspernatur laudantium hic saepe quidem maxime nihil sit incidunt unde quam amet nam, quis, similique beatae. Eligendi, eveniet ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam cumque qui doloribus, quo placeat explicabo officiis officia aliquam magnam asperiores illum quae iure ipsum veniam, blanditiis, assumenda omnis repellendus.</p>
      <h2 className="interests">Interests & Likes</h2>
    </div>
  </div>
);

// == Export
export default AboutMe;
