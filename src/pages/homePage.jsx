import CardList from "../components/cardList";
import Filter from "../components/filter";
import HouseList from "../components/houseList";
import Nav from "../components/Nav";
import { useToggleContext } from "../context/toggleContext";

function HomePage() {
  const { toggleState, toggleDispatch } = useToggleContext();

  return (
    <div>
      <Nav />
      <div className="main-content">
        <div className="top-bar">
          <HouseList />
          <div className="filter-btn">
            <button
              className="mid-btn btn-primary"
              onClick={() => toggleDispatch({ type: "toggle" })}
            >
              Filter
            </button>
          </div>
          <div className={toggleState.toggle ? "modal" : "modal hide"}>
            <p className="h1-text prime-color-text">Apply Filter</p>
            <i
              className="fas fa-times close-modal"
              onClick={() => toggleDispatch({ type: "toggle" })}
            ></i>
            <Filter modal />
          </div>
        </div>
        <div className="main">
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
