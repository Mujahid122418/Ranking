import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { CreateReview,CreateComment } from "../../../Redux/Epics/review";
import { connect } from "react-redux";


const MyRating = props => {
  const [value, setValue] = React.useState(4);
  const [comment, setcomment] = React.useState("");

  const changeRating = rating => {
    setValue(rating);
  };
  const postRating = () => {
    let object = { value, pid: props.pid };
    // debugger;
    props.Review(object);
  };

  const postComment=()=>{
    let object = { value:comment, pid: props.pid ,user:props.user.name};
    props.comment(object)
  };
// console.log('this is  a user props', props.user)
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            changeRating(newValue);
          }}
          size="large"
        />
      </Box>
      <button onClick={postRating} className="vp-add-rating">
        Add Rating
      </button>
      {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <label for="comment">Comment:</label>
        <textarea class="form-control" onChange={(e)=>setcomment(e.target.value)} rows="4" id="comment"></textarea>
      </Box>
      <button onClick={postComment} className="vp-add-rating">Add comment</button> */}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  user: state.Login.user
});

const mapDispatchToProps = dispacth => ({
  Review: prameter => dispacth(CreateReview(prameter)),
  comment: prameter => dispacth(CreateComment(prameter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyRating);
