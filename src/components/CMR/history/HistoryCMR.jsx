import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RemoveHistory } from "../../../store/global/action";
import HistoryItem from "./HistoryItem";

import { Box, Button, List } from "@mui/material";

function HistoryCMR() {
  const { History } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  const ClearHistoryCMR = () => {
    dispatch(RemoveHistory());
    localStorage.removeItem(`CMR`);
  };

  return (
    <Box
      component="div"
      sx={{
        display: `flex`,
        flexDirection: `column`,
        // minHeight: `100%`,
        width: { xs: `50%`, md: `200px` },
        justifyContent: { xs: `center` },
        p: 1,
        m: 1,
        backgroundColor: "#fff4f4",
        color: `#1B1212`,
        border: "1px solid #b3abab",
        borderRadius: 2,
        justifyContent: `center`,
        textAlign: `center`,
      }}
    >
      <p style={{ flex: `1 1 auto` }}>Історія</p>
      {History === undefined || History.length === 0 ? null : (
        <List sx={{ flex: `1 1 auto` }}>
          {History.map((item) => (
            <HistoryItem key={item} item={item} />
          ))}
        </List>
      )}
      <Button
        sx={{ textTransform: `none` }}
        variant="contained"
        onClick={() => ClearHistoryCMR()}
      >
        Видалити історію
      </Button>
    </Box>
  );
}

export default HistoryCMR;
