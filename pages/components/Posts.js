import React from "react";
import classes from './All.module.css'

 

const Posts = (props) => {

  const removePostId = id => {
    props.removePost(id)
  }
  return (
    <section>
      <h4>Posts</h4>
      {props.posts.map((post, index) => (
          <div className={classes.posts} key={index}>
            <div>
            {index + 1}.<span style={{ fontWeight: "700" }}>Name: </span>
            {post.name} <br />{" "}
            <span style={{ fontWeight: "700" }}>Comment: </span>
            {post.comment}
            </div>
            <div>
              <button  onClick={e => removePostId(post.id)} className={classes.delete}>Delete</button>
            </div>
          </div>
        ))}
    </section>
  )
}

export default Posts