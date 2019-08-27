// == Import : npm
import React from 'react';

// == Import : local
import './aboutMe.scss';

// == Composant
const AboutMe = () => (
  <div id="aboutMe">
    <div className="aboutMe">
      <h2 className="aboutMe-title">About Me</h2>
      <div className="aboutMe-description">
        <p className="aboutMe-description-littleDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab, dignissimos reiciendis fuga porro</p>
        <p className="aboutMe-description-mainDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui possimus aspernatur laudantium hic saepe quidem maxime nihil sit incidunt unde quam amet nam, quis, similique beatae. Eligendi, eveniet ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam cumque qui doloribus, quo placeat explicabo officiis officia aliquam magnam asperiores illum quae iure ipsum veniam, blanditiis, assumenda omnis repellendus.</p>
      </div>
      <div className="aboutMe-interests">
        <h3 className="aboutMe-interests-title">Interests & Likes</h3>
        <ul className="aboutMe-interests-ul">
          <div className="aboutMe-interests-ul-list"> - Sport: <span className="aboutMe-interests-ul-list-italic"> tennis, running, table tennis...</span></div>
          <div className="aboutMe-interests-ul-list"> - Reading</div>
          <div className="aboutMe-interests-ul-list"> - Cinema</div>
          <div className="aboutMe-interests-ul-list"> - Video-Games</div>
          <div className="aboutMe-interests-ul-list"> - Hanging out with friends</div>
          <div className="aboutMe-interests-ul-list"> - Video-Games development</div>
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default AboutMe;
