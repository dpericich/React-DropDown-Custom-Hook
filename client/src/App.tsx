import { useState } from 'react';
import './App.css';
import Loader from './Loader';
import { OptionInputType } from './shared/types';
import StateDropDown from './StateDropDown';
import useLoadDropDown from './hooks/useLoadDropDown';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentState, setCurrentState] = useState<string>('');
  const [stateList, setStateList] = useState<OptionInputType[]>([]);

  useLoadDropDown('http://localhost:3003/state-names', setIsLoading, setCurrentState, setStateList);

  return (
    <div className="App">
      <header className="App-header">
        <h1>U.S. State Selection</h1>
        { isLoading ? <Loader /> : <StateDropDown currentState={currentState} stateList={stateList} setCurrentState={setCurrentState} /> }
      </header>
    </div>
  );
}

export default App;
