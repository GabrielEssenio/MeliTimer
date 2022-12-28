/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import teamAudience from '../images/Background/teamAudience.jpg';
import * as S from '../styles/SpeaksDaily';
import * as T from '../styles/TeamAudience';

const TeamAudience = () => (
  <div>
    <S.speaksMain>
      <S.speaksName>Team Audience</S.speaksName>
      <T.teamAudience
        src={ teamAudience }
        alt={ teamAudience }
      />
    </S.speaksMain>
  </div>
);

TeamAudience.propTypes = {
  teamAudience: PropTypes.img,
}.isRequired;

export default TeamAudience;
