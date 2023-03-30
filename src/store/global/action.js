import { API, API_KEY } from "../../services";

export const GET_DEPARTMENTS = `GET_DEPARTMENTS`;
export const GET_CMR = `GET_CMR`;
export const GET_HISTORY_CMR = `GET_HISTORY_CMR`;
export const ADD_HISTORY_CMR = `ADD_HISTORY_CMR`;
export const REMOVE_HISTORY_CMR = `REMOVE_HISTORY_CMR`;
export const GET_CMR_NUMBER = `GET_CMR_NUMBER`;
export const GET_TOTAL_COUNT = `GET_TOTAL_COUNT`;
export const DELETE_CMR_NUMBER = `DELETE_CMR_NUMBER`;
export const GET_WAREHOUSE_TYPES = `GET_WAREHOUSE_TYPES`;
export const GET_MESSAGE_CODE = `GET_MESSAGE_CODE`;
export const GET_CMR_FAILURE = `GET_CMR_FAILURE`;
export const REMOVE_ERROR = `REMOVE_ERROR`;
export const REMOVE_MESSAGE_CODE = `REMOVE_MESSAGE_CODE`;
export const GET_DEPARTMENT_MESSAGE_CODE = `GET_DEPARTMENT_MESSAGE_CODE`;
export const GET_DEPARTMENT_FAILURE = `GET_DEPARTMENT_FAILURE`;
export const REMOVE_DEPARTMENT_ERROR = `REMOVE_DEPARTMENT_ERROR`;
export const REMOVE_DEPARTMENT_MESSAGE_CODE = `REMOVE_DEPARTMENT_MESSAGE_CODE`;
export const REMOVE_DEPARTMENTS = `REMOVE_DEPARTMENTS`;

const settings = (KEY, CMR) => {
  return {
    apiKey: `${KEY}`,
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: `${CMR}`,
          Phone: "",
        },
      ],
    },
  };
};

const MessageCodeText = (KEY, code) => {
  return {
    apiKey: `${KEY}`,
    modelName: "Common",
    calledMethod: "getMessageCodeText",
    methodProperties: {
      MessageCode: `${code}`,
    },
  };
};

const WarehouseTypes = (KEY) => {
  return {
    apiKey: `${KEY}`,
    modelName: "Address",
    calledMethod: "getWarehouseTypes",
    methodProperties: {},
  };
};

const settings2 = (KEY, city, WarehouseId, page = 1) => {
  return {
    apiKey: `${KEY}`,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: `${city}`,
      CityRef: "",
      Page: `${page}`,
      Limit: "20",
      Language: "UA",
      TypeOfWarehouseRef: "",
      WarehouseId: `${WarehouseId}`,
    },
  };
};

export const actFetchDepartmentsRequest = (city, WarehouseId, page) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings2(API_KEY, city, WarehouseId, page)),
      });
      const data2 = await response.json();
      if (data2.data.length > 0) {
        dispatch(GetDepartments(data2.data));
        dispatch(GetTotalCount(data2.info.totalCount));
        dispatch(RemoveDepartmentMessageCode());
      } else {
        let err;
        switch ((city, WarehouseId)) {
          case city && !WarehouseId:
            err = 20000900768;
            break;
          case !city && WarehouseId:
            err = 20002102226;
            break;
          // case city && WarehouseId:
          default:
            dispatch(
              GetMessageCodeDepartment("Місто чи відділеня не знайдено")
            );
            break;
        }
        throw err;
      }
    } catch (error) {
      dispatch(actFetchDepMessageCodeRequest(error));
    }
  };
};

const actFetchCMRRequest = (CMR) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings(API_KEY, CMR)),
      });
      const data2 = await response.json();
      if (data2.success === true) {
        data2.data.map((item) => dispatch(GetCMR(item)));
      } else {
        throw data2.errorCodes[0];
      }
    } catch (error) {
      dispatch(getCMRFailure(error));
    }
  };
};

export default actFetchCMRRequest;

export const actFetchWarehouseTypesRequest = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(WarehouseTypes(API_KEY)),
      });
      const data2 = await response.json();
      dispatch(GetWarehouseTypes(data2.data));
    } catch (error) {}
  };
};

export const actFetchMessageCodeRequest = (code) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(MessageCodeText(API_KEY, code)),
      });
      const data2 = await response.json();
      if (data2.data[0].MessageDescriptionUA === null) {
        dispatch(GetMessageCodeText(data2.data[0].MessageText));
      } else {
        dispatch(GetMessageCodeText(data2.data[0].MessageDescriptionUA));
      }
    } catch (error) {}
  };
};

export const actFetchDepMessageCodeRequest = (code) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(MessageCodeText(API_KEY, code)),
      });
      const data2 = await response.json();
      if (data2.data[0].MessageDescriptionUA === null) {
        dispatch(GetMessageCodeDepartment(data2.data[0].MessageText));
      } else {
        dispatch(GetMessageCodeDepartment(data2.data[0].MessageDescriptionUA));
      }
    } catch (error) {}
  };
};

export function GetDepartments(payload) {
  return {
    type: "GET_DEPARTMENTS",
    payload: payload,
  };
}

export function RemoveDepartments() {
  return {
    type: "REMOVE_DEPARTMENTS",
  };
}

export function GetCMR(payload) {
  return {
    type: "GET_CMR",
    payload: payload,
  };
}

export function GetHistoryCMR(payload) {
  return {
    type: "GET_HISTORY_CMR",
    payload: payload,
  };
}

export function AddHistoryCMR(payload) {
  return {
    type: "ADD_HISTORY_CMR",
    payload: payload,
  };
}

export function RemoveHistory() {
  return {
    type: "REMOVE_HISTORY_CMR",
  };
}

export function GetCMRNumber(payload) {
  return {
    type: "GET_CMR_NUMBER",
    payload: payload,
  };
}

export function DeleteCMRNumber() {
  return {
    type: "DELETE_CMR_NUMBER",
  };
}

export function GetTotalCount(payload) {
  return {
    type: "GET_TOTAL_COUNT",
    payload: payload,
  };
}

export function GetWarehouseTypes(payload) {
  return {
    type: "GET_WAREHOUSE_TYPES",
    payload: payload,
  };
}

export function GetMessageCodeText(payload) {
  return {
    type: "GET_MESSAGE_CODE",
    payload: payload,
  };
}

export function getCMRFailure(payload) {
  return {
    type: "GET_CMR_FAILURE",
    payload: payload,
  };
}

export function RemoveError() {
  return {
    type: "REMOVE_ERROR",
  };
}

export function RemoveMessageCode() {
  return {
    type: "REMOVE_MESSAGE_CODE",
  };
}

export function GetMessageCodeDepartment(payload) {
  return {
    type: "GET_DEPARTMENT_MESSAGE_CODE",
    payload: payload,
  };
}

export function getDepartmentFailure(payload) {
  return {
    type: "GET_DEPARTMENT_FAILURE",
    payload: payload,
  };
}

export function RemoveDepartmentError() {
  return {
    type: "REMOVE_DEPARTMENT_ERROR",
  };
}

export function RemoveDepartmentMessageCode() {
  return {
    type: "REMOVE_DEPARTMENT_MESSAGE_CODE",
  };
}
