import React from "react";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function DepartmentItem({ item }) {
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
          textAlign: `left`,
        }}
      >
        {item.Description}
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
