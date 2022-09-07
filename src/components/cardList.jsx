import React from "react";
import { houses } from "../database/houses";
function CardList() {
  return (
    <div className="main-sec">
      {houses.map((house) => {
        return (
          <div className="basic-card">
            <img src={house.img} className="card-img" alt="text" />
            <div className="card-body">
              <span className="card-price h4-text wt-bold">{house.price}$</span>
              <h4 className="card-title">{house.name}</h4>
              <p className="card-content">{house.address}.</p>
              <div className="card-footer">
                <div className="card-foot flex-row-center">
                  <i className="fas fa-bed"></i>
                  <p className="foot-text">{house.beds} bedroom</p>
                </div>
                <div className="card-foot flex-row-center">
                  <i className="fas fa-sink"></i>
                  <p className="foot-text">2 bathroom</p>
                </div>
                <div className="card-foot flex-row-center">
                  <i className="fas fa-cube"></i>
                  <p className="foot-text">5X7 m</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
