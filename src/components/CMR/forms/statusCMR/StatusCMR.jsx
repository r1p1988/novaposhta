import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actFetchCMRRequest from "../../../../store/global/action";
import {
  AddHistoryCMR,
  GetHistoryCMR,
  GetCMRNumber,
} from "../../../../store/global/action";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../../../store/index";

function StatusTTN() {
  const { History } = useSelector((state) => state.global);
  const { CMR_Number } = useSelector((state) => state.global);
  // const [CMR, setCMR] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    History.length !== 0 && saveToLocalStorage(History);
  }, [History]);

  useEffect(() => {
    localStorage.length > 0 && dispatch(GetHistoryCMR(loadFromLocalStorage()));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(GetCMRNumber(CMR));
    if (CMR_Number) {
      dispatch(AddHistoryCMR(CMR_Number));
      dispatch(actFetchCMRRequest(CMR_Number));
    }
  };

  const handleCMRValue = (e) => {
    dispatch(GetCMRNumber(e.target.value));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="number"
        placeholder="Введіть номер ТТН"
        value={CMR_Number}
        onChange={(e) => handleCMRValue(e)}
        // onChange={(e) => setCMR(e.target.value)}
      />
      <button>Get status TTN</button>
    </form>
  );
}

export default StatusTTN;
