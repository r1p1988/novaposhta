import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Department from "../components/Department/Department";
import SearchDepartments from "../components/Department/forms/SearchDepartments";
import Header from "../components/header/Header";
import { actFetchDepartmentsRequest } from "../store/global/action";

import Box from "@mui/material/Box";

function DepartmentsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [city, setCity] = useState("Київ");
  const [WarehouseId, setWarehouseId] = useState("");
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchDepartmentsRequest(city, WarehouseId, currentPage));
  }, [currentPage]);

  return (
    <>
      <Box
        component="div"
        sx={{
          // width: 740,
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
        <SearchDepartments
          city={city}
          setCity={setCity}
          WarehouseId={WarehouseId}
          setWarehouseId={setWarehouseId}
          setCurrentPage={setCurrentPage}
          isShow={isShow}
          setIsShow={setIsShow}
        />
        {!isShow ? (
          <Department
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            city={city}
            WarehouseId={WarehouseId}
          />
        ) : null}
      </Box>
    </>
  );
}

export default DepartmentsList;
