const initStateHome = {
  dataBlogs: [],
};
const HomeReducer = (state = initStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }
  return state;
};


export default HomeReducer;