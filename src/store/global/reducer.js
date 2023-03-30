import {
  GET_CMR,
  GET_DEPARTMENTS,
  GET_HISTORY_CMR,
  ADD_HISTORY_CMR,
  REMOVE_HISTORY_CMR,
  GET_CMR_NUMBER,
  GET_TOTAL_COUNT,
  DELETE_CMR_NUMBER,
  GET_WAREHOUSE_TYPES,
  GET_CMR_FAILURE,
  GET_MESSAGE_CODE,
  REMOVE_ERROR,
  REMOVE_MESSAGE_CODE,
  GET_DEPARTMENT_MESSAGE_CODE,
  GET_DEPARTMENT_FAILURE,
  REMOVE_DEPARTMENT_ERROR,
  REMOVE_DEPARTMENT_MESSAGE_CODE,
  REMOVE_DEPARTMENTS,
} from "./action";

const INITIAL_STATE = {
  CMR: [],
  CMR_Number: ``,
  Warehouse: [],
  Departments: ``,
  Total_Count: "",
  History: [],
  MessageCode: ``,
  hasErrors: ``,
  DepMessageCode: ``,
  DepHasErrors: ``,
};

export default function cmrReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_MESSAGE_CODE:
      return { ...state, MessageCode: payload };
    case GET_DEPARTMENT_MESSAGE_CODE:
      return { ...state, DepMessageCode: payload };
    case GET_CMR:
      let message, errors;
      if (payload.StatusCode === `3`) {
        message = `Номер не знайден`;
        errors = ``;
      } else {
        message = ``;
        errors = ``;
      }
      return {
        ...state,
        CMR: payload,
        MessageCode: message,
        hasErrors: errors,
      };
    case GET_CMR_FAILURE:
      return { ...state, hasErrors: payload };
    case GET_DEPARTMENT_FAILURE:
      return { ...state, DepHasErrors: payload };
    case GET_CMR_NUMBER:
      return { ...state, CMR_Number: payload };
    case DELETE_CMR_NUMBER:
      return { ...state, CMR: `` };
    case GET_TOTAL_COUNT:
      return { ...state, Total_Count: payload };
    case GET_DEPARTMENTS:
      return { ...state, Departments: payload };
    case REMOVE_DEPARTMENTS:
      return { ...state, Departments: [] };
    case GET_WAREHOUSE_TYPES:
      return { ...state, Warehouse: payload };
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
        History: [],
      };
    case REMOVE_MESSAGE_CODE:
      return {
        ...state,
        MessageCode: ``,
      };
    case REMOVE_DEPARTMENT_MESSAGE_CODE:
      return {
        ...state,
        DepMessageCode: ``,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        hasErrors: ``,
      };
    case REMOVE_DEPARTMENT_ERROR:
      return {
        ...state,
        DepHasErrors: ``,
      };
    default:
      return state;
  }
}
