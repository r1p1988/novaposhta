import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actFetchCMRRequest from "../../../../store/global/action";

function StatusTTN() {
  const [CMR, setCMR] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(actFetchCMRRequest(CMR));
  };
  console.log(CMR);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="number"
        placeholder="Введіть номер ТТН"
        value={CMR}
        onChange={(e) => setCMR(e.target.value)}
      />
      <button>Get status TTN</button>
    </form>
  );
}

export default StatusTTN;
