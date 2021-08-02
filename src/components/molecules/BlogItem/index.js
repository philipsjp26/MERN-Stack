import React from "react";
import { useHistory } from "react-router";
import { Button, Gap } from '../../atoms'
import './blogitem.scss'

const BlogItem = (props) => {
  let history = useHistory()
  return (
    <div className="blog-item">
      <img className="image-thumb" src={props.image} alt="post " />
      <div className="content-detail">
        <p className="title">{props.title}</p>
        <p className="author">{props.name}</p>
        <p className="body">{props.body}</p>
        <Gap height={20}/>
        <Button title="view Detail" onClick={() => history.push('/detail-blog') }/>
      </div>
    </div>
  );
};

export default BlogItem;
