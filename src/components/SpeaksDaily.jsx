/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import speaks from '../utils/speaks';
import '../App.css';

const SpeaksDaily = () => {
  const [disable, setDistable] = React.useState(false);
  const [randomPerson, setRandomPerson] = React.useState(0);

  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  useEffect(() => {
    const rndInt = randomIntFromInterval(0, speaks.length - 1);
    console.log(rndInt);
    setRandomPerson(rndInt);
  }, []);

  const nextPerson = () => {
    if (speaks.length < 3) {
      setDistable(true);
    }
    speaks.splice(randomPerson, 1);
    const rndInt = randomIntFromInterval(0, speaks.length - 1);
    console.log(rndInt);
    setRandomPerson(rndInt);
  };

  const speaker = (
    <div>
      <div className="speaks-main">
        <p className="speaks-name">{speaks[randomPerson].name}</p>
        <img
          className="speaks-image"
          src={ speaks[randomPerson].image }
          alt={ speaks[randomPerson].image }
        />
      </div>
      <button
        className="button-next-person"
        onClick={ nextPerson }
        type="button"
        disabled={ disable }
      >
        Next
      </button>
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
