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
import TheEnd from '../images/TheEnd/theend.jpg';
import { getLocalStorage } from '../utils/localStorage';

const SpeaksDaily = ({ showButton, temas }) => {
  if (!temas || temas.length === 0) {
    temas = JSON.stringify(speakDaily);
  }
  const [randomPerson, setRandomPerson] = React.useState(0);
  const [numbNext, setNumbNext] = React.useState(1);
  const [arraySpeaks, setArraySpeaks] = React.useState(JSON.parse(temas));
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const storageSpeakers = getLocalStorage('speakers') || arraySpeaks;
    const selectedSpeakers = arraySpeaks.filter((speaker, index) => (speaker.checked === storageSpeakers[index].checked));
    selectedSpeakers.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setArraySpeaks(selectedSpeakers);
    setLoading(false);
  }, []);

  const nextPerson = () => {
    setRandomPerson(randomPerson + 1);
    setNumbNext(numbNext + 1);
  };

  const nowSpeaker = (
    <div>
      <S.speaksMain>
        <S.speaksName>{arraySpeaks[randomPerson].name}</S.speaksName>
        <S.speaksImage
          src={ arraySpeaks[randomPerson].image }
          alt={ arraySpeaks[randomPerson].image }
        />
      </S.speaksMain>
      <S.buttonNextPerson
        onClick={ nextPerson }
        disabled={ numbNext === arraySpeaks.length }
      >
        Next
      </S.buttonNextPerson>

    </div>
  );

  const nextSpeaker = (
    numbNext === arraySpeaks.length
      ? (
        <S.speaksMain>
          <S.speaksName>The End</S.speaksName>
          <S.speaksImage
            src={ TheEnd }
            alt="The End"
          />
        </S.speaksMain>
      )
      : (
        <S.speaksMain>
          <S.speaksName>{arraySpeaks[numbNext].name}</S.speaksName>
          <S.speaksImage
            src={ arraySpeaks[numbNext].image }
            alt={ arraySpeaks[numbNext].image }
          />
        </S.speaksMain>
      )
  );

  return (
    loading ? <div />
      : (
        <S.speaksRow>
          {nowSpeaker}
          {nextSpeaker}
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
