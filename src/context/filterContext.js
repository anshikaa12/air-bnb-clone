import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./filterReducer";
const filterContext = createContext();
const useFilterContext = () => useContext(filterContext);
const FilterProvider = ({children}) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    location: "",
    beds: "",
    price: 0,
    type: "",
  });
  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};
export { FilterProvider, useFilterContext };
