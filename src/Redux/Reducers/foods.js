import * as actionTypes from "../actionTypes";

const Foods = (
  state = {
    isLoading: false,
    errMess: null,
    user: null
  },
  action
) => {
  switch (action.type) {

    case actionTypes.FOOD_SUCCESS:

      return { ...state, isLoading: false, errMess: null, foods: action.food };
    case actionTypes.FOOD_ADD:
      {
        const food = action.food
        return {
          ...state, isLoading: false, errMess: null,
          foods: [...state.foods, food]
        }
      }
    case actionTypes.FOOD_REMOVE:

      {
        const foods = state.foods.filter((food, index) => food._id !== action.food)
        return {
          ...state, isLoading: false, errMess: null,
          foods
        }
      }
    
      case actionTypes.comment_ADD:
      {
        const foods = state.foods.map((food, index) => {
          if(food._id === action.comment.food){
            food.comment.push(action.comment)
            return food
          }
          else return food
        })
        return {
          ...state, isLoading: false, errMess: null,
          foods
        }
      }

    case actionTypes.FOOD_UPDATE:

      {
        const foods = state.foods.map((food, index) => {
          if (food._id === action.food.id) return action.food.updatedfood
          else
            return food
        })
        return {
          ...state, isLoading: false, errMess: null,
          foods
        }
      }
    default:
      return state;
  }
};

export default Foods;
