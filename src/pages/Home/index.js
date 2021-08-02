import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { BlogItem, Button, Gap } from "../../components";
import { setDataBlog } from "../../config/redux/action";
import "./home.scss";
const Home = () => {
  const { dataBlogs } = useSelector((state) => state.HomeReducer);
  const [counter, setCounter] = useState(1)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [dispatch]);

  const previous = () => {
    setCounter(counter - 1)
  };
  const next = () => {
    setCounter(counter + 1)
   };
  let history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlogs.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              title={blog.title}
              name={blog.name}
              body={blog.body}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">1 / 5</p>
        <Gap width={20} />
        <Button title="Next" onClick={next}/>
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
