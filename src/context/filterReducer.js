const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        ...state,
        location: action.payload.loc,
        beds: action.payload.beds,
        price: action.payload.price,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

function FilteredList(location, beds, price, type, cardData) {
  console.log(location, beds, price, type);
  let updatedList = [...cardData].filter(
    (data) =>
      location === data.location &&
      Number(data.beds) <= Number(beds) &&
      Number(data.price) <= Number(price) &&
      type === data.type
  );

  return updatedList;
}
export { filterReducer, FilteredList };
