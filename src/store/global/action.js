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
      dispatch(GetDepartments(data2.data));
      dispatch(GetTotalCount(data2.info.totalCount));
    } catch (error) {}
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
      data2.data.map((item) => dispatch(GetCMR(item)));
    } catch (error) {}
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

export function GetDepartments(payload) {
  return {
    type: "GET_DEPARTMENTS",
    payload: payload,
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
