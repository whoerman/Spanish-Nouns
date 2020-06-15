import React from 'react';
import '../Countdown/countdowntimer.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
 
const CountdownTimer = () => {

    const timerTotal = 10;

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer">Time's Up!...</div>;
        }
      
        return (
          <div className="timer">
            <div className="timertext">Remaining</div>
            <div className="timervalue">{remainingTime}</div>
            <div className="timertext">seconds</div>
          </div>
        );
      };

      return (
        <>
        <div className="App">
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
        </div>
        </>
      );
    }


export default CountdownTimer;