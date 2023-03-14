import { API, API_KEY } from "../../services";

export const GET_DEPARTMENTS = `GET_DEPARTMENTS`;
export const GET_CMR = `GET_CMR`;
export const GET_HISTORY_CMR = `GET_HISTORY_CMR`;
export const ADD_HISTORY_CMR = `ADD_HISTORY_CMR`;
export const REMOVE_HISTORY_CMR = `REMOVE_HISTORY_CMR`;
export const GET_CMR_NUMBER = `GET_CMR_NUMBER`;

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

// const settings3 = (KEY, CMR) => {
//   return {
//     apiKey: `${KEY}`,
//     modelName: "InternetDocument",
//     calledMethod: "findDocumentByData",
//     methodProperties: {
//       DateFrom: "07.12.2022",
//       DateTo: "08.04.2023",
//       FindByData: `${CMR}`,
//       Limit: 10,
//       Page: 0,
//     },
//   };
// };

const settings2 = (KEY, city, WarehouseId, page = 1) => {
  return {
    apiKey: `${KEY}`,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: `${city}`,
      CityRef: "",
      Page: `${page}`,
      Limit: "50",
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
