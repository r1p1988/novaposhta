import React from "react";
import Department from "../components/Department/Department";
import SearchDepartments from "../components/Department/forms/SearchDepartments";
import Header from "../components/header/Header";

function DepartmentsList() {
  return (
    <>
      <Header />
      <SearchDepartments />
      <Department />
    </>
  );
}

export default DepartmentsList;
