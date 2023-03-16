import React from "react";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

// CategoryOfWarehouse: "Postomat";
// CategoryOfWarehouse: "Branch";

function DepartmentItem({ item }) {
  const WarehouseCategory = {
    Postomat: `П-т`,
    Branch: `Відд`,
  };

  return (
    <TableRow>
      <TableCell
        sx={{
          textAlign: `center`,
        }}
      >
        {item.CityDescription}
      </TableCell>
      <TableCell
        sx={{
          textAlign: `center`,
        }}
      >
        {WarehouseCategory[item.CategoryOfWarehouse]} №{item.Number}
      </TableCell>
      <TableCell
        sx={{
          textAlign: `left`,
        }}
      >
        {item.ShortAddress}
      </TableCell>
      <TableCell
        sx={{
          textAlign: `center`,
        }}
      >
        До {item.PlaceMaxWeightAllowed} кг
      </TableCell>
    </TableRow>
  );
}

export default DepartmentItem;
