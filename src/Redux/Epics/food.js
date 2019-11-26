import {
  // transport_failed,


  food_success,
  food_add,
  food_remove,
  food_update,
  FoodFailed
  // transport_create,

} from "../Actions/authentication";


import { baseUrl } from "../../shared";


export const Getfood = () => dispatch => {

  baseUrl
    .get('/product')
    .then(res => {
      if (res.status === 200) {

        dispatch(food_success(res.data.foods));

        console.log(res.data)
      }
    })
    .catch((err) => {

      dispatch(FoodFailed("Some thing went wrong"));

    });
};


export const Createfood = creds => dispatch => {
  baseUrl
    .post('api/product', creds)
    .then(res => {
      if (res.status === 201) {
        console.log(res.data)
        dispatch(food_add(res.data.food));

      } else {

        // console.log(res)
      }
    })
    .catch((err) => {

      // dispatch(login_failed("Some thing went wrong"));
      // console.log(err)
    });
};

export const Deletefood = creds => dispatch => {
  // const {email,password}=creds
  // dispatch(login_loading());
  const token = localStorage.getItem("token");
  baseUrl
    .delete('api/food/' + creds, { headers: { "Authorization": `Bearer ${token}` } }
    )
    .then(res => {
      if (res.status === 204) {
        dispatch(food_remove(creds));
      }
    })
    .catch((err) => {

      console.log(err)
    });
};

export const Updatefood = ({ id, ...creds }) => dispatch => {
  // const {email,password}=creds
  // dispatch(login_loading());
  const form = new FormData();
  form.append("name", creds.name);
  form.append("price", creds.price)
  form.append("photo", creds.photo)
  const token = localStorage.getItem("token");
  baseUrl
    .patch('api/food/' + id,
      form,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
    .then(res => {
      if (res.status === 200) {
        dispatch(food_update({ id, updatedfood: res.data.food }));

      }
    })
    .catch((err) => {
      console.log(err)
    });
};
