import Axios from "axios";
export const setDataBlog = (page) => (dispatch) =>{
  Axios.get(`http://localhost:3004/v1/blog/all?perPage=4&page=${page}`)
    .then((result) => {
      const responseAPI = result.data;
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.content });
    })
    .catch((err) => {
      console.log(err);
    });
};
