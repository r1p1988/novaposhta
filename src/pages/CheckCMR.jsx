import React from "react";

import DetailsCMR from "../components/CMR/details/DetailsCMR";
import StatusCMR from "../components/CMR/forms/statusCMR/StatusCMR";
import HistoryCMR from "../components/CMR/history/HistoryCMR";
import Header from "../components/header/Header";

import Box from "@mui/material/Box";

function CheckCMR() {
  return (
    <>
      <Box
        component="div"
        sx={{
          // width: 740,
          // width: `50%`,
          p: 1,
          m: `auto`,
          backgroundColor: "#ffe9e9",
          color: `#fff`,
          border: "1px solid",
          borderRadius: 2,
          justifyContent: `center`,
          textAlign: `center`,
        }}
      >
        <Box
          component="div"
          sx={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `center`,
            textAlign: `center`,
            color: "#e74646",
          }}
        >
          <img
            style={{
              height: "45px",
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: "10px",
            }}
            src="./img/logo1.svg"
            alt="нова пошта"
          />
        </Box>
        <Header />
        <StatusCMR />
        <Box
          component="div"
          sx={{
            // display: "flex",
            display: { xs: `flex` },
            flexDirection: { xs: `column`, sm: `row` },
            height: { sm: `300px` },
            alignItems: { xs: `center` },
            justifyContent: { md: `center` },
            // width: `100%`,
            p: 1,
            m: 1,
          }}
        >
          <DetailsCMR />
          <HistoryCMR />
        </Box>
      </Box>
    </>
  );
}

export default CheckCMR;
