/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DialPad extends Component {
  render() {
    const { reset } = this.props;
    const numbers = [];
    const MAX = 10;
    for (let i = 1; i < MAX; i += 1) {
      numbers.push(i.toString());
    }
    const { addTime } = this.props;
    return (
      <div className="dial-pad-buttons">
        {numbers.map((num) => (
          <button
            type="button"
            key={num}
            onClick={() => addTime(num)}
          >
            {num}
          </button>
        ))}
        <button type="button">
          {/* <img className="dial-mercadopago" src={logoMercadoPago} alt="" /> */}
        </button>

        <button type="button" key={0} onClick={() => addTime('0')}>0</button>
        <button type="button" key="clear" id="clear" onClick={reset}>C</button>
      </div>);
  }
}

DialPad.propTypes = {
  addTime: PropTypes.func,
}.isRequired;

export default DialPad;
