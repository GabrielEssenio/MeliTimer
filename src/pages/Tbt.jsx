/* eslint-disable no-unused-vars */
import React from 'react';
import HeaderTbt from '../components/HeaderTbt';
import TeamAudience from '../components/TeamAudience';
import SpeaksDaily from '../components/SpeaksDaily';
import '../App.css';

const Tbt = () => {
  const [showPerson, setShowPerson] = React.useState(false);

  const randomTbt = () => {
    setShowPerson(true);
  };

  return (
    <div className="tbt-page">
      <HeaderTbt />
      <div className="content-tbt">
        <div>
          <TeamAudience />
        </div>
        <div>

          {showPerson
            ? (
              <div
                className="tbt-person"
                data-aos="zoom-in-down"
              >
                <SpeaksDaily showButton={ false } />
              </div>
            )
            : (
              <div className="tbt-button">
                <button
                  className="button-86"
                  onClick={ randomTbt }
                  type="button"
                >
                  <p className="text-button-tbt">Choose a Person</p>
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Tbt;
