import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

function DetailsCMR() {
  const { CMR } = useSelector((state) => state.global);

  return (
    <>
      {!Array.isArray(CMR) && CMR ? (
        <Box
          component="div"
          sx={{
            width: 500,
            height: 200,
            p: 1,
            m: 1,
            backgroundColor: "text.disabled",
            color: `#fff`,
            border: "1px solid",
            borderRadius: 2,
          }}
        >
          <p>Статус доставки: {CMR.Status}</p>
          <p>Відправлено: {CMR.WarehouseSender}</p>
          <p>Отримано: {CMR.WarehouseRecipient}</p>
        </Box>
      ) : null}
    </>
  );
}

export default DetailsCMR;
