import React from "react";
import DetailsCMR from "../components/CMR/details/DetailsCMR";
import StatusCMR from "../components/CMR/forms/statusCMR/StatusCMR";
import HistoryCMR from "../components/CMR/history/HistoryCMR";
import Header from "../components/header/Header";

function CheckCMR() {
  return (
    <>
      <Header />
      <StatusCMR />
      <div>
        <DetailsCMR />
        <HistoryCMR />
      </div>
    </>
  );
}

export default CheckCMR;
