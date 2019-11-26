import {
  login_failed,
  login_loading,
  login_success
} from "../Actions/authentication";

import { Alert } from 'reactstrap';
// import axios from "axios";
import { baseUrl, verifyToken } from "../../shared";


 export const LoginActionCreater = creds => dispatch=>{
    const {email,password}=creds
  dispatch(login_loading());
  baseUrl
  .post('users/login', {
    email,
   password
 })
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        const user = verifyToken();

        if (user) {
          dispatch(login_success(user));
         alert("Hello "+ user.name );
        } else {
         alert(res.message);
          dispatch(login_failed("Some thing went wrong"));
          // console.log(res)
        }
      }
    })
    .catch((err) => {
      alert(err.message);
      dispatch(login_failed("Some thing went wrong"));
      console.log(err)
    });
};



export const SignupActionCreater = creds => dispatch=>{
  
dispatch(login_loading());
baseUrl
.post('users/signup', {
 ...creds
})
  .then(res => {
    if (res.status === 201) {
      localStorage.setItem("token", res.data.token);
      const user = verifyToken();

      if (user) {
        dispatch(login_success(user));
        alert("Hello "+ user.name );
      } else {
        alert(res.message);
        dispatch(login_failed("Some thing went wrong"));
        // console.log(res)
      }
    }
  })
  .catch((err) => {
    alert(err.message);
    dispatch(login_failed("Some thing went wrong"));
    console.log(err)
  });
};



