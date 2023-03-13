import React from "react";
import { useDispatch } from "react-redux";
import actFetchCMRRequest, { GetCMRNumber } from "../../../store/global/action";

function HistoryItem({ item }) {
  const dispatch = useDispatch();

  const handleCheckCMR = (item, e) => {
    dispatch(GetCMRNumber(item));
    dispatch(actFetchCMRRequest(item));
  };

  return <li onClick={(e) => handleCheckCMR(item, e)}>{item}</li>;
}

export default HistoryItem;
