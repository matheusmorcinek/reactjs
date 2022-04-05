import logo from './logo.svg';
import './App.css';
import Autocomplete from './components/autocomplete/autocomplete';


function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Debounce – How to Delay a Function in React JS using Lodash
      </p>
      <Autocomplete onSelectItem={() => console.log('test')} />
    </div>
  );
}

export default App;
