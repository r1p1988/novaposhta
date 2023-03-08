import React from "react";
import { useSelector } from "react-redux";

function DetailsCMR() {
  const { CMR } = useSelector((state) => state.global);

  return (
    <>
      {!Array.isArray(CMR) ? (
        <div>
          <p>Статус доставки: {CMR.TrackingStatusName}</p>
          <p>Відправлено: {CMR.SenderAddressDescription}</p>
          <p>Отримано: {CMR.RecipientAddressDescription}</p>
        </div>
      ) : null}
    </>
  );
}

export default DetailsCMR;
