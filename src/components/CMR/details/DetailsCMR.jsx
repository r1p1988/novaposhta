import React from "react";
import { useSelector } from "react-redux";

function DetailsCMR() {
  const { CMR } = useSelector((state) => state.global);

  return (
    <>
      {!Array.isArray(CMR) ? (
        <div>
          <p>Статус доставки: {CMR.Status}</p>
          <p>Відправлено: {CMR.WarehouseSender}</p>
          <p>Отримано: {CMR.WarehouseRecipient}</p>
        </div>
      ) : null}
    </>
  );
}

export default DetailsCMR;
