import { API, API_KEY } from "../../services";

const settings = {
  apiKey: `${API_KEY}`,
  modelName: "TrackingDocument",
  calledMethod: "getStatusDocuments",
  methodProperties: {
    Documents: [
      {
        DocumentNumber: "20450670076402",
        Phone: "",
      },
    ],
  },
};

export const GET_CMR = `GET_CMR`;

export function GetCMR(payload) {
  return {
    type: "GET_CMR",
    payload: payload,
  };
}

const actFetchCMRRequest = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });
      const data2 = await response.json();
      data2.data.map((item) => dispatch(GetCMR(item)));
    } catch (error) {}
  };
};

export default actFetchCMRRequest;
