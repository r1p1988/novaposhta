import React from "react";

function DepartmentItem({ item }) {
  return (
    <tr>
      <td>{item.CityDescription}</td>
      <td>{item.Description}</td>
      <td>До {item.PlaceMaxWeightAllowed} кг</td>
    </tr>
  );
}

export default DepartmentItem;
