const initState = {
  name: "prawito hudoro",
};
const GlobalReducer = (state = initState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Hudoro",
    };
  }
  return state;
};

export default GlobalReducer;