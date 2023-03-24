import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RemoveHistory } from "../../../store/global/action";
import HistoryItem from "./HistoryItem";

import { Box, Button, List, ListSubheader } from "@mui/material";

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
        minHeight: { xs: `200px`, sm: `250px` },
        width: { xs: `50%`, sm: `30%`, md: `20%`, lg: `15%` },
        // overflow: `auto`,
        maxHeight: `200px`,
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
      {/* <p style={{ flex: `1 1 auto` }}>Історія</p> */}
      {History === undefined || History.length === 0 ? (
        <ListSubheader
          sticky
          sx={{ flex: `1 1 auto`, backgroundColor: "#fff4f4" }}
        >
          Історія
        </ListSubheader>
      ) : (
        <>
          <ListSubheader sticky sx={{ backgroundColor: "#fff4f4" }}>
            Історія
          </ListSubheader>
          <List sx={{ flex: `1 1 auto`, overflow: `auto` }}>
            {History.map((item) => (
              <HistoryItem key={item} item={item} />
            ))}
          </List>
        </>
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
