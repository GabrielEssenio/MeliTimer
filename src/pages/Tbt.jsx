/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderTbt from '../components/HeaderTbt';
import TeamAudience from '../components/TeamAudience';
import SpeaksDaily from '../components/SpeaksDaily';
import '../App.css';
import * as T from '../styles/Tbt';

const Tbt = () => {
  const [showPerson, setShowPerson] = React.useState(false);

  const randomTbt = () => {
    setShowPerson(true);
  };

  return (
    <T.tbtPage>
      <HeaderTbt />
      <T.contentTbt>
        <div>
          <TeamAudience />
        </div>
        <div>

          {showPerson
            ? (
              <div
                data-aos="zoom-in-down"
              >
                <SpeaksDaily showButton={ false } />
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
