import React from "react";
import { Button, Gap, Input, Link, Textarea, Upload } from "../../components";
import { useHistory } from 'react-router-dom'
import "./createblog.scss";
const CreateBlog = () => {
  let history = useHistory()
  return (
    <div className="blog-post">
      <Link title="title" onClick={() => history.push('/')}/>
      <p className="title">Create new blog post</p>
      <Input label="Post title" />
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="save" />
      </div>
      <Gap height={20} />

    </div>
  );
};

export default CreateBlog;
