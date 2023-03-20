import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actFetchCMRRequest from "../../../../store/global/action";
import {
  AddHistoryCMR,
  GetHistoryCMR,
  GetCMRNumber,
  DeleteCMRNumber,
} from "../../../../store/global/action";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../../../store/index";

import { TextField, Button, Box } from "@mui/material";

function StatusTTN() {
  const { History } = useSelector((state) => state.global);
  const { CMR_Number } = useSelector((state) => state.global);
  // const [CMR, setCMR] = useState("");
  const [isShow, setIsShow] = useState(false);

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
      if (!CMR_Number.match(/\d{15}/)) {
        setIsShow(false);
        dispatch(AddHistoryCMR(CMR_Number));
        dispatch(actFetchCMRRequest(CMR_Number));
      } else {
        console.log(`error`);
        setIsShow(true);
      }
    }
  };

  const handleCMRValue = (e) => {
    dispatch(GetCMRNumber(e.target.value.replace(/[^0-9]+/g, "")));
    if (!e.target.value) {
      dispatch(DeleteCMRNumber());
    }
  };

  return (
    <>
      <Box
        sx={{ mb: 2 }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          sx={{ mr: 2 }}
          label="Номер накладної"
          value={CMR_Number}
          size="small"
          // type="number"
          onChange={(e) => handleCMRValue(e)}
        />
        <Button
          sx={{ textTransform: `none` }}
          variant="contained"
          type="submit"
        >
          Відстежити
        </Button>
      </Box>
      {isShow && (
        <Box sx={{ color: `black` }} component="div">
          Номер не знайден
        </Box>
      )}
    </>
  );
}

export default StatusTTN;
