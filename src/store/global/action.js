import { API, API_KEY } from "../../services";

export const GET_DEPARTMENTS = `GET_DEPARTMENTS`;
export const GET_CMR = `GET_CMR`;

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

const settings2 = (KEY, city = "Київ") => {
  return {
    apiKey: `${KEY}`,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: `${city}`,
      CityRef: "",
      Page: "1",
      Limit: "20",
      Language: "UA",
      TypeOfWarehouseRef: "",
      WarehouseId: "",
    },
  };
};

export const actFetchDepartmentsRequest = (city) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings2(API_KEY, city)),
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
