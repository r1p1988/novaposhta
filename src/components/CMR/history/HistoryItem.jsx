import React from "react";
import { useDispatch } from "react-redux";
import actFetchCMRRequest, { GetCMRNumber } from "../../../store/global/action";

import { ListItemButton, ListItemText } from "@mui/material";

function HistoryItem({ item }) {
  const dispatch = useDispatch();

  const handleCheckCMR = (item, e) => {
    dispatch(GetCMRNumber(item));
    dispatch(actFetchCMRRequest(item));
  };

  return (
    <ListItemButton onClick={(e) => handleCheckCMR(item, e)}>
      <ListItemText sx={{ textAlign: `center` }} primary={item} />
    </ListItemButton>
  );
  // return <li onClick={(e) => handleCheckCMR(item, e)}>{item}</li>;
}

export default HistoryItem;
