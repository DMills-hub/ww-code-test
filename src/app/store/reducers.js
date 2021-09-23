import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import nationalInsuranceReducer from "./reducers/nationalInsurance";

const rootReducer = () =>
  combineReducers({
    routing: routerReducer,
    nationalInsurance: nationalInsuranceReducer,
  });

export default rootReducer();
