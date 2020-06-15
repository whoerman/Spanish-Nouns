import React from 'react';
import '../components/countdowntimer.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
 
const CountdownTimer = () => {

    const timerTotal = 5;

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer">Time's Up!...</div>;
        }
      
        return (
          <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
          </div>
        );
      };

      return (
        <>
        <div className="App">
          {/* <h1>
            Countdown Circle Timer React Component
          </h1> */}
          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={timerTotal}
              colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
              onComplete={() => [true, 1000]}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          {/* <p className="info">
            Change component properties in the code filed on the right to try
            difference functionalities
          </p> */}
        </div>
      );
        </>
      );
    }


export default CountdownTimer;