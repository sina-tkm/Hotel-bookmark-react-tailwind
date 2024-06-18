import { createContext, useContext, useReducer } from "react";


export const SelectContext = createContext({});
export const DispatchContext = createContext(() => {});


const initialState = {
 value: "content3" 
};


function reducer(state, action) {
  switch (action.type) {
    case "one":
    case "two":
    case "three":
    case "four":
      return {
        ...state,
        value: action.payload
      };
    default:
      throw new Error("Unknown action type: " + action.type);
  }
}


export function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SelectContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </SelectContext.Provider>
  );
}

// Custom hooks
export function useSelect() {
  return useContext(SelectContext);
}

export function useDispatch() {
  return useContext(DispatchContext);
}
