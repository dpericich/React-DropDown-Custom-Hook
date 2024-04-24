import { OptionInputType } from './shared/types';

type StateDropDownPropType = {
    currentState: string,
    stateList: OptionInputType[],
    setCurrentState: Function
};

const StateDropDown = ({ currentState, stateList, setCurrentState }: StateDropDownPropType) => {
    const handleChange = (event: any) => {
        const { target } = event
        if (target) { setCurrentState(event.target.value as string) };
    };

    return(
      <select name="" id="" value={currentState} onChange={handleChange} style={{ padding: '1rem 2rem', fontSize: '1.3rem' }}>
        { stateList.map(item => (
          <option 
            value={item.value} 
            disabled={item.disabled}
          >
              {item.readableName}
          </option>
        )) }
      </select>
    )
  };

  export default StateDropDown;