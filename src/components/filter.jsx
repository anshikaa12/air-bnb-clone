import React from "react";

function Filter() {
  return (
    <div className="filter-bar flex-row-center">
      <ul className="filter-list flex-row">
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Location</div>
          <div className="filter-type-list">
            <select className="wt-md h5-text">
              <option value="Newyourk">Newyork</option>
              <option value="India">India</option>
              <option value="Tokyo">Tokyo</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">
            Number of Beds (less than equal to)
          </div>
          <div className="filter-type-list">
            <select className="wt-md h5-text">
              <option value="2">2</option>
              <option value="6">6</option>
              <option value="15">15</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">
            Price (less than equal to)
          </div>
          <div className="filter-type-list">
            <select className="wt-md h5-text">
              <option value="3000">3000</option>
              <option value="8000">8000</option>
              <option value="10000">15000</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Property</div>
          <div className="filter-type-list">
            <select className="wt-md h5-text" value="house">
              <option value="house">house</option>
              <option value="bunglow">bunglow</option>
              <option value="flat">flat</option>
            </select>
          </div>
        </li>
      </ul>
      <div className="filter-item flex-row">
        <div className="filter-box flex-row-center">
          <i class="fas fa-search h5-text"></i>
          <p className="h5-text">Search</p>
        </div>
        <div className="filter-box flex-row-center">
          <p className="h5-text">Clear</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
