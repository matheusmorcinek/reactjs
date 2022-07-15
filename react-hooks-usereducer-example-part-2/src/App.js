import { useEffect, useReducer } from 'react';
import './App.css';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

const reducer = (currentState, action) => {

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: currentState.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  useEffect(() => {
    console.log('App did mount')
  }, []);

  useEffect(() => {
    console.log('App did render')
  });

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
