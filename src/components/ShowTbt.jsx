/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from '../styles/SpeaksDaily';
import { speakDaily } from '../utils/speaks';

const SpeaksDaily = ({ _, temas }) => {
  if (!temas) {
    temas = JSON.stringify(speakDaily);
  }
  const [randomPerson, setRandomPerson] = React.useState(0);
  const [arraySpeaks, setArraySpeaks] = React.useState(JSON.parse(temas));
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    arraySpeaks.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setLoading(false);
  }, []);

  const nowSpeaker = (
    <div>
      <S.speaksMain>
        <S.speaksName>{arraySpeaks[randomPerson].name}</S.speaksName>
        <S.speaksImage
          src={ arraySpeaks[randomPerson].image }
          alt={ arraySpeaks[randomPerson].image }
        />
      </S.speaksMain>
    </div>
  );

  return (
    loading ? <div />
      : (
        <S.speaksRow>
          {nowSpeaker}
          )
        </S.speaksRow>
      )
  );
};

SpeaksDaily.propTypes = {
  onChangeFunc: PropTypes.func,
  addTime: PropTypes.func,
  sec: PropTypes.number,
  min: PropTypes.number,
}.isRequired;

export default SpeaksDaily;
