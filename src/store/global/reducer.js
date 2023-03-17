import {
  GET_CMR,
  GET_DEPARTMENTS,
  GET_HISTORY_CMR,
  ADD_HISTORY_CMR,
  REMOVE_HISTORY_CMR,
  GET_CMR_NUMBER,
  GET_TOTAL_COUNT,
  DELETE_CMR_NUMBER,
} from "./action";

const INITIAL_STATE = {
  CMR: [],
  CMR_Number: ``,
  Departments: ``,
  Total_Count: "",
  History: [],
};

export default function cmrReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CMR:
      return { ...state, CMR: payload };
    case GET_CMR_NUMBER:
      return { ...state, CMR_Number: payload };
    case DELETE_CMR_NUMBER:
      return { ...state, CMR: `` };
    case GET_TOTAL_COUNT:
      return { ...state, Total_Count: payload };
    case GET_DEPARTMENTS:
      return { ...state, Departments: payload };
    case GET_HISTORY_CMR:
      return { ...state, History: payload };
    case ADD_HISTORY_CMR:
      let newArr;
      if (!state.History.includes(payload)) {
        newArr = [...state.History, payload];
      } else {
        newArr = state.History;
      }
      return {
        ...state,
        History: newArr,
      };
    case REMOVE_HISTORY_CMR:
      return {
        ...state,
        History: ``,
      };
    default:
      return state;
  }
}
