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

const SpeaksDaily = ({ showButton, temas }) => {
  if (temas.length === 0) {
    temas = JSON.stringify(speakDaily);
  }
  const [disable, setDistable] = React.useState(false);
  const [randomPerson, setRandomPerson] = React.useState(0);
  const [arraySpeaks, setArraySpeaks] = React.useState(JSON.parse(temas));

  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  useEffect(() => {
    const rndInt = randomIntFromInterval(0, arraySpeaks.length - 1);
    setRandomPerson(rndInt);
  }, []);

  const nextPerson = () => {
    if (arraySpeaks.length < 3) {
      setDistable(true);
    }
    arraySpeaks.splice(randomPerson, 1);
    const rndInt = randomIntFromInterval(0, arraySpeaks.length - 1);
    setRandomPerson(rndInt);
  };

  const speaker = (
    <div>
      <S.speaksMain>
        <S.speaksName>{arraySpeaks[randomPerson].name}</S.speaksName>
        <S.speaksImage
          src={ arraySpeaks[randomPerson].image }
          alt={ arraySpeaks[randomPerson].image }
        />
      </S.speaksMain>
      {showButton
        ? (
          <S.buttonNextPerson
            onClick={ nextPerson }
            disabled={ disable }
          >
            Next
          </S.buttonNextPerson>
        )
        : <div />}
    </div>
  );
  return (
    <div>
      {speaker}
    </div>
  );
};

SpeaksDaily.propTypes = {
  onChangeFunc: PropTypes.func,
  addTime: PropTypes.func,
  sec: PropTypes.number,
  min: PropTypes.number,
}.isRequired;

export default SpeaksDaily;
