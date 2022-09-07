import React from "react";
import { useFilterContext } from "../context/filterContext";
import { useState } from "react";
import { useToggleContext } from "../context/toggleContext";

function Filter() {
  const {toggleDispatch}=useToggleContext();
  const { filterDispatch } = useFilterContext();
  const [loc, setLoc] = useState("Newyork");
  const [beds, setbeds] = useState("2");
  const [price, setPrice] = useState("3000");
  const [type, setType] = useState("house");

  function clickHandler() {
    filterDispatch({
      type: "FILTER",
      payload: { loc: loc, beds: beds, price: price, type: type },
    });
    toggleDispatch({type:"toggle"})
  }
  function clearHandler() {
    filterDispatch({
      type: "FILTER",
      payload: { loc: "", beds: 0, price: 0, type: "" },
    });
    toggleDispatch({type:"toggle"})
  }

  return (
    <div className="filter-bar">
      <ul className="filter-list ">
        <div className="row-list">
          <li className="filter-item flex-col">
            <div className="filter-type wt-md h5-text">Location</div>
            <div className="filter-type-list">
              <select
                onChange={(e) => setLoc(e.target.value)}
                className="wt-md h5-text"
                value={loc}
              >
                <option value="Newyourk">Newyork</option>
                <option value="India">India</option>
                <option value="Tokyo">Tokyo</option>
              </select>
            </div>
          </li>
          <li className="filter-item flex-col">
            <div className="filter-type wt-md h5-text">
              Number of Beds 
            </div>
            <div className="filter-type-list">
              <select
                onChange={(e) => setbeds(e.target.value)}
                className="wt-md h5-text"
                value={beds}
              >
                <option value="2">2</option>
                <option value="6">6</option>
                <option value="15">15</option>
              </select>
            </div>
          </li>
        </div>
        <div className="row-list">
          <li className="filter-item flex-col">
            <div className="filter-type wt-md h5-text">
              Price 
            </div>
            <div className="filter-type-list">
              <select
                onChange={(e) => setPrice(e.target.value)}
                className="wt-md h5-text"
                value={price}
              >
                <option value="3000">3000</option>
                <option value="8000">8000</option>
                <option value="10000">15000</option>
              </select>
            </div>
          </li>
          <li className="filter-item flex-col">
            <div className="filter-type wt-md h5-text">Property</div>
            <div className="filter-type-list">
              <select
                onChange={(e) => setType(e.target.value)}
                className="wt-md h5-text"
                value={type}
              >
                <option value="house">house</option>
                <option value="bunglow">bunglow</option>
                <option value="flat">flat</option>
              </select>
            </div>
          </li>
        </div>
      </ul>
      <div className="filter-item flex-row">
                <div
                  className="filter-box flex-row-center"
                  onClick={clickHandler}
                >
                  <i className="fas fa-search h5-text"></i>
                  <p className="h5-text">Search</p>
                </div>
                <div
                  className="filter-box flex-row-center"
                  onClick={clearHandler}
                >
                  <p className="h5-text">Clear</p>
                </div>
              </div>
    </div>
    
  );
}

export default Filter;
