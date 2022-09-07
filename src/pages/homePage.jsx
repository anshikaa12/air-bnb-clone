import React from "react";
import CardList from "../components/cardList";
import Filter from "../components/filter";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <div>
      <Nav />
      <div className="main-content">
      <Filter />
      <div className="main">
        <CardList />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
