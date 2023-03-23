import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

function DetailsCMR() {
  const { CMR } = useSelector((state) => state.global);

  return (
    <Box
      component="div"
      sx={{
        width: { md: `500px` },
        minWidth: { sm: `300px` },
        minHeight: { xs: `175px` },
        // height: 200,
        p: 1,
        m: 1,
        backgroundColor: "#fff4f4",
        color: `#1B1212`,
        border: "1px solid #b3abab",
        borderRadius: 2,
        textAlign: `left`,
      }}
    >
      {!Array.isArray(CMR) && CMR ? (
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
