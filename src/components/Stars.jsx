/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import { Howl } from 'howler';
import '../index.css';
import eject from '../sounds/eject.mp3';
import alert from '../sounds/pause.mp3';

class Stars extends Component {
  constructor() {
    super();
    this.soundPlay = this.soundPlay.bind(this);
  }

  componentDidMount() {
    this.soundPlay(alert);
    this.soundPlay(eject);
  }

  soundPlay(src) {
    const sound = new Howl({
      src,
      volume: 0.5,
    });
    sound.play();
  }

  render() {
    return (
      <>
        <h2>
          <p>Your timer is over</p>
        </h2>
        <boi>
          <rightleg />
          <leftleg />
          <backpack />
          <belly />
          <eye />
          <leftleg />
        </boi>
        <button
          type="button"
          className="try-again-btn"
        >
          {' '}
          Try again
        </button>
      </>

    );
  }
}

export default Stars;
