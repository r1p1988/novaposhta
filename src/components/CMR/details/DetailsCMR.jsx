import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

function DetailsCMR() {
  const { CMR, MessageCode } = useSelector((state) => state.global);

  return (
    <Box
      component="div"
      sx={{
        width: { md: `500px` },
        minWidth: { xs: `350px` },
        minHeight: { xs: `200px`, sm: `250px` },
        p: 1,
        m: 1,
        backgroundColor: "#fff4f4",
        color: `#1B1212`,
        border: "1px solid #b3abab",
        borderRadius: 2,
        textAlign: `left`,
      }}
    >
      {!Array.isArray(CMR) && CMR && !MessageCode ? (
        <>
          <p>
            <b>Статус доставки:</b> {CMR.Status}
          </p>
          <p>
            <b>Відправлено:</b> {CMR.WarehouseSender}
          </p>
          <p>
            <b>Отримано:</b> {CMR.WarehouseRecipient}
          </p>
        </>
      ) : null}
    </Box>
  );
}

export default DetailsCMR;
