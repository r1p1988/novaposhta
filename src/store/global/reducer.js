import { GET_CMR, GET_DEPARTMENTS } from "./action";

const INITIAL_STATE = {
  CMR: [],
  Departments: [],
};

export default function cmrReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CMR:
      return { ...state, CMR: payload };
    case GET_DEPARTMENTS:
      return { ...state, Departments: payload };
    default:
      return state;
  }
}
