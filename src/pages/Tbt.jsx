/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import TeamAudience from '../components/TeamAudience';
import ShowTbt from '../components/ShowTbt';
import '../App.css';
import * as T from '../styles/Tbt';

const Tbt = () => {
  const [showPerson, setShowPerson] = React.useState(false);

  const randomTbt = () => {
    setShowPerson(true);
  };

  return (
    <T.tbtPage>
      <Header />
      <T.contentTbt>
        <div>
          {showPerson
            ? (
              <div
                data-aos="zoom-in-down"
              >
                <ShowTbt showButton={ false } />
              </div>
            )
            : (
              <T.tbtButton>
                <button
                  className="button-86"
                  onClick={ randomTbt }
                  type="button"
                >
                  <T.textButtonTbt>Choose a Person</T.textButtonTbt>
                </button>
              </T.tbtButton>
            )}
        </div>
      </T.contentTbt>
    </T.tbtPage>
  );
};

export default Tbt;
