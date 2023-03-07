import React from "react";
import { useSelector } from "react-redux";

function Department() {
  const { Departments } = useSelector((state) => state.global);

  return <div>Список відділень</div>;
}

export default Department;
