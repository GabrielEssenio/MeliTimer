/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import teamAudience from '../images/teamAudience.jpg';

const TeamAudience = () => (
  <div>
    <div className="speaks-main">
      <p className="speaks-name">Team Audience</p>
      <img
        className="team-audience"
        src={ teamAudience }
        alt={ teamAudience }
      />
    </div>
  </div>
);

TeamAudience.propTypes = {
  teamAudience: PropTypes.img,
}.isRequired;

export default TeamAudience;
