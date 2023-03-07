import React from "react";
import { useSelector } from "react-redux";
import DepartmentItem from "./DepartmentItem";

function Department() {
  const { Departments } = useSelector((state) => state.global);

  return (
    <table>
      <tr>
        <th>Місто</th>
        <th>Адреса</th>
        <th>Обмеження ваги</th>
      </tr>
      {Departments.map((item) => (
        <DepartmentItem item={item} />
      ))}
    </table>
  );
}

export default Department;
