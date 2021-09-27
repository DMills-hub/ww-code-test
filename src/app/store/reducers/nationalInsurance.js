import { CHANGE_INCOME } from "../actions/nationalInsurance";

const initialState = {
  income: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INCOME:
      return {
        income: action.payload.income,
      };
    default:
      return state;
  }
};

export default reducer;
