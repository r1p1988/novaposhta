import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actFetchCMRRequest from "../../../store/global/action";

function DetailsCMR() {
  const { CMR } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(actFetchCMRRequest());
    })();
  }, [dispatch]);

  return <div></div>;
}

export default DetailsCMR;
