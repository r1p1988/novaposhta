import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Department from "../components/Department/Department";
import SearchDepartments from "../components/Department/forms/SearchDepartments";
import Header from "../components/header/Header";
import { actFetchDepartmentsRequest } from "../store/global/action";

function DepartmentsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [city, setCity] = useState("Київ");
  const [WarehouseId, setWarehouseId] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actFetchDepartmentsRequest(city));
  // }, []);

  useEffect(() => {
    dispatch(actFetchDepartmentsRequest(city, WarehouseId, currentPage));
  }, [currentPage]);

  return (
    <>
      <Header />
      <SearchDepartments
        city={city}
        setCity={setCity}
        WarehouseId={WarehouseId}
        setWarehouseId={setWarehouseId}
        setCurrentPage={setCurrentPage}
      />
      <Department currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default DepartmentsList;
