import React, { useState, useReducer } from 'react';

const initialState = {count: 0};

function scoreReducer(state, action) {
  switch (action.type) {
    case 'correct':
      return {score: state.score + 1};
    case 'wrong':
      return {score: state.score - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(scoreReducer, initialState);
  return (
    <>
      Count: {state.score}
      <button onClick={() => dispatch({type: 'correct'})}>-</button>
      <button onClick={() => dispatch({type: 'wrong'})}>+</button>
    </>
  );
}