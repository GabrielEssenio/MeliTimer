/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { speakDaily } from '../utils/speaks';
import * as S from '../styles/CheckboxGroup';
import { saveLocalStorage, getLocalStorage } from '../utils/localStorage';

function App() {
  const [arraySpeaks, setArraySpeaks] = useState(getLocalStorage('speakers') || speakDaily);

  useEffect(() => {
    saveLocalStorage('speakers', arraySpeaks);
  }, [arraySpeaks]);

  const handleCheckboxChange = (index) => {
    const updatedSpeakers = [...arraySpeaks];
    updatedSpeakers[index].checked = !updatedSpeakers[index].checked;
    setArraySpeaks(updatedSpeakers);
  };

  return (
    <S.speakContant>
      {arraySpeaks.map(({ name, image, checked }, index) => (
        <S.label key={ name }>
          <h1>{name}</h1>
          <S.inputField
            type="checkbox"
            name={ name }
            checked={ checked }
            onChange={ () => handleCheckboxChange(index) }
          />
          <S.imageSpeak src={ image } alt={ `Imagem ${name}` } />
        </S.label>
      ))}
    </S.speakContant>
  );
}

export default App;
