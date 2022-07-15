import { useEffect, useReducer } from 'react';
import './App.css';

const reducer = (currentState, action) => {

  switch (action.type) {
    case 'increment':
      return { count: currentState.count + 1 };
    case 'decrement':
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'increment' });
  };
  
  const decrement = () => {
    dispatch({ type: 'decrement' });
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
