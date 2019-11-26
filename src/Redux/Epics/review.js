import {
    reviewAdd,
    reviewfailed,
    commentAdded,
    commentfailed
} from "../Actions/authentication";


import { baseUrl } from "../../shared";
export const CreateReview = creds => dispatch => {
    const token = localStorage.getItem("token");
    if (!token) { return alert("Please login first ") }
    dispatch({type:"LOADING"});

    debugger;
    baseUrl
        .post('product/' + creds.pid + '/review', { rating: creds.value, user: creds.user }, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
            if (res.status === 201) {
                dispatch(reviewAdd(res.data.food));
            } else {

                // console.log(res)
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch(reviewfailed("Some thing went wrong"));

        });
};


export const CreateComment = creds => dispatch => {
    const token = localStorage.getItem("token");
    if (!token) { return alert("Please login first ") }
    dispatch({type:"LOADING"});

    debugger;
    baseUrl
        .post('product/' + creds.pid + '/comment', { message: creds.value, name: creds.user  }, { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
            if (res.status === 201) {
                dispatch(commentAdded({ food:creds.pid,massage: creds.value, name: creds.user  }));
                alert("success")
            } else {

                // console.log(res)
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch(commentfailed("Some thing went wrong"));
            alert("acception here dulicated! failed")

        });
};