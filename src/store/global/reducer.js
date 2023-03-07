import { GET_CMR } from "./action";

const INITIAL_STATE = {
  CMR: [],
};

export default function cmrReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CMR:
      return { ...state, CMR: payload };
    default:
      return state;
  }
}
