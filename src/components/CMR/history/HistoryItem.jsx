import React from "react";
import { useDispatch } from "react-redux";

import actFetchCMRRequest, { GetCMRNumber } from "../../../store/global/action";

import { ListItemButton, ListItemText, ListItem } from "@mui/material";

function HistoryItem({ item }) {
  const dispatch = useDispatch();

  const handleCheckCMR = (item, e) => {
    dispatch(GetCMRNumber(item));
    dispatch(actFetchCMRRequest(item));
  };

  return (
    <ListItem sx={{ padding: `0` }}>
      <ListItemButton onClick={(e) => handleCheckCMR(item, e)}>
        <ListItemText sx={{ textAlign: `center` }} primary={item} />
      </ListItemButton>
    </ListItem>
  );
}

export default HistoryItem;
