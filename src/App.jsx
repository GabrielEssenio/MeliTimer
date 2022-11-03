/* eslint-disable react/jsx-curly-spacing */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainButtons from './components/MainButtons';
import Timer from './components/Timer';
import SpeaksDaily from './components/SpeaksDaily';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      timeIndex: 3,
      inputTime: ['0', '0', '0', '0'],
      showAnimation: false,
      showPerson: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.addTime = this.addTime.bind(this);
    this.convertToNumber = this.convertToNumber.bind(this);
    this.verifyMaxNumbers = this.verifyMaxNumbers.bind(this);
  }

  verifyMaxNumbers() {
    const { seconds } = this.state;
    const sixtySecs = 60;
    if (seconds > sixtySecs) {
      this.setState((prevState) => ({
        seconds: prevState.seconds - sixtySecs,
        minutes: prevState.minutes + 1,
      }));
    }
  }

  convertToNumber() {
    const { inputTime } = this.state;
    const secNumber = parseFloat(inputTime[2] + inputTime[3]);
    const minNumber = parseFloat(inputTime[0] + inputTime[1]);

    this.setState({
      seconds: secNumber,
      minutes: minNumber,
    });
  }

  startTimer() {
    this.verifyMaxNumbers();
    const ONE_SECOND = 1000;
    const COUNTDOWN = 0;
    this.setState({ showPerson: true });
    this.timerInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds === 0 && minutes === 0) {
        this.stopTimer();
      }
      if (seconds < 1) {
        this.setState((prevState) => ({ minutes: prevState.minutes - 1, seconds: 59 }));
      } else {
        this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
      }
      if (seconds <= COUNTDOWN && minutes === 0) {
        this.setState({ showAnimation: true });
      }
    }, ONE_SECOND);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.setState({
      seconds: 0,
      minutes: 0,
      timeIndex: 3,
    });
  }

  // ------- rebuild addTime function
  addTime(param) {
    const { inputTime, timeIndex } = this.state;
    const newValue = inputTime;
    const maxSize = 3;
    if (timeIndex === maxSize) {
      newValue[timeIndex] = param;
    }
    if (timeIndex === 2) {
      newValue[timeIndex] = newValue[timeIndex + 1];
      newValue[timeIndex + 1] = param;
    }
    if (timeIndex === 1) {
      newValue[timeIndex] = newValue[timeIndex + 1];
      newValue[timeIndex + 1] = newValue[timeIndex + 2];
      newValue[timeIndex + 2] = param;
    }
    if (timeIndex === 0) {
      newValue[timeIndex] = newValue[timeIndex + 1];
      newValue[timeIndex + 1] = newValue[timeIndex + 2];
      newValue[timeIndex + 2] = newValue[timeIndex + maxSize];
      newValue[timeIndex + maxSize] = param;
    }

    this.convertToNumber();
    this.setState((prevState) => ({
      inputTime: newValue,
      timeIndex: prevState.timeIndex - 1,
    }));
  }

  render() {
    const { seconds, minutes, showAnimation, showPerson } = this.state;
    return (
      <div>
        {!showAnimation && <Header />}

        <div className="content-app">

          <div className="App">
            {!showAnimation
          && <Timer
            sec={seconds}
            min={minutes}
            addTime={this.addTime}
            start={this.startTimer}
            reset={this.stopTimer}
          />}
            {!showAnimation
          && <MainButtons
            startTimer={this.startTimer}
            pauseTimer={this.pauseTimer}
            stopTimer={this.stopTimer}
          />}
          </div>
          {!showAnimation && showPerson
          && <SpeaksDaily />}
          {!showAnimation}
        </div>
      </div>
    );
  }
}

export default App;
