import { API, API_KEY } from "../../services";

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

export const GET_CMR = `GET_CMR`;

export function GetCMR(payload) {
  return {
    type: "GET_CMR",
    payload: payload,
  };
}

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
