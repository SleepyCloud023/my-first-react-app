import { useCallback, useReducer} from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      const {name, value} = action;
      return {
        ...state,
        [name]: value,
      }
    
    case 'RESET':
      return action.initialState;
    default:
      throw new Error('undefined action type!');
  }
}

// 아래와 같은 형식 
// const initialInput = {
//   username: '',
//   email: '',
// };
function useInput(initialState) {
  const [form, dispatch] = useReducer(reducer, initialState);

  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE',
      name,
      value,
    });
  }, []);

  const reset = () => {
    dispatch({
      type: 'RESET',
      initialState,
    })
  }

  return [form, onChange, reset]; 
}

export default useInput;