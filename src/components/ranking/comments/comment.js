import React, { Component } from "react";
import {connect} from 'react-redux'
// import { CreateReview,CreateComment } from "../../../Redux/Epics/review";
import {CreateComment} from '../../../Redux/Epics/review'
import "./comment.css";
import Box from "@material-ui/core/Box";
const Comment = props => {
  const [comment, setcomment] = React.useState("");
  const postComment = () => {
    let object = { value: comment, pid: props.pid, user: props.user.name };
    props.commentt(object);
  };
  //   render() {
  // console.log(this.props);
  return (
    <div className="cmt-area">
      <div className="comment-r">
        <h1>User Comments</h1>
        {props.comment &&
          props.comment.map((item, key) => {
            return (
              <div key={key} className="comment-area">
                <div className="cmt-user">{item.user}</div>
                <div className="cmt-cmt">{item.massage}</div>
              </div>
            );
          })}
        <div className="cmt-user">
          {/* <div className="comment-r"> */}
            <Box component="fieldset" mb={3} borderColor="transparent">
              <label for="comment">Your Review</label>
              <textarea
            //   style={{width:'50%'}}
                placeholder="Share your honest experience and help other make a better choices."
                class="form-control"
                onChange={e => setcomment(e.target.value)}
                rows="4"
                id="comment"
              ></textarea>
            </Box>
          {/* </div> */}
          <button onClick={postComment} className="vp-add-rating">
            Add comment
          </button>
        </div>
      </div>
    </div>
  );
  //   }
};
const mapStateToProps = (state, ownProps) => ({
    user: state.Login.user
  });
  
  const mapDispatchToProps = dispacth => ({
    // Review: prameter => dispacth(CreateReview(prameter)),
    commentt: prameter => dispacth(CreateComment(prameter)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Comment);
// export default Comment;
