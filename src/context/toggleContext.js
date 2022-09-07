import { createContext, useContext, useReducer } from "react";

const toggleContext= createContext();
const useToggleContext = ()=>useContext(toggleContext);
const ToggleProvider=({children})=>{
    const [toggleState,toggleDispatch] = useReducer((state,action)=>{
        switch(action.type){
            case "toggle":
                return {...state,toggle:!state.toggle};
            default:
                return state
        }
    },{
        toggle:false,
    });
  
  
    return <toggleContext.Provider value={{toggleState,toggleDispatch}}>{children}</toggleContext.Provider>
}
export{useToggleContext,ToggleProvider}