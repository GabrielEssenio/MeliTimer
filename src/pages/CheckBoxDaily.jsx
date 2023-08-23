/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import '../App.css';
import * as T from '../styles/Tbt';
import CheckboxGroup from '../components/CheckBoxGroup';

const CheckboxDaily = () => {
  const [showPerson, setShowPerson] = React.useState(false);

  const randomTbt = () => {
    setShowPerson(true);
  };

  return (
    <T.tbtPage>
      <Header />
      <CheckboxGroup />
    </T.tbtPage>
  );
};

export default CheckboxDaily;
