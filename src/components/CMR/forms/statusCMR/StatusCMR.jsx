import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actFetchCMRRequest from "../../../../store/global/action";
import {
  AddHistoryCMR,
  GetHistoryCMR,
  GetCMRNumber,
  DeleteCMRNumber,
  actFetchMessageCodeRequest,
  RemoveError,
  RemoveMessageCode,
} from "../../../../store/global/action";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../../../store/index";

import { TextField, Button, Box } from "@mui/material";

function StatusTTN() {
  const { CMR, History, CMR_Number, hasErrors, MessageCode } = useSelector(
    (state) => state.global
  );

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.length > 0 && dispatch(GetHistoryCMR(loadFromLocalStorage()));
  }, []);

  useEffect(() => {
    History.length !== 0 && saveToLocalStorage(History);
  }, [History]);

  useEffect(() => {
    if (hasErrors) {
      dispatch(actFetchMessageCodeRequest(hasErrors));
    } else {
      CMR_Number !== "" && dispatch(AddHistoryCMR(CMR_Number));
    }
  }, [CMR, hasErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (CMR_Number) {
      dispatch(actFetchCMRRequest(CMR_Number));
    }
  };

  const handleCMRValue = (e) => {
    dispatch(GetCMRNumber(e.target.value.replace(/[^0-9]+/g, "")));
    if (!e.target.value) {
      dispatch(DeleteCMRNumber());
      dispatch(RemoveError());
      dispatch(RemoveMessageCode());
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
      {MessageCode ? (
        <Box sx={{ color: `black`, mt: 1 }} component="div">
          {MessageCode}
        </Box>
      ) : null}
    </>
  );
}

export default StatusTTN;
