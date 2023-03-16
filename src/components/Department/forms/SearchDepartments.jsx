import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actFetchDepartmentsRequest } from "../../../store/global/action";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function SearchDepartments({
  city,
  setCity,
  setCurrentPage,
  WarehouseId,
  setWarehouseId,
}) {
  // const [city, setCity] = useState("");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actFetchDepartmentsRequest("Київ"));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(actFetchDepartmentsRequest(city, WarehouseId));
  };
  return (
    <Box
      sx={{ mb: 2 }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      <TextField
        sx={{ mr: 2 }}
        label="Місто"
        // value={city}
        size="small"
        // type="number"
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        sx={{ mr: 2 }}
        label="Номер відділення"
        value={WarehouseId}
        size="small"
        // type="number"
        onChange={(e) => setWarehouseId(e.target.value)}
      />
      <Button sx={{ textTransform: `none` }} variant="contained" type="submit">
        Знайти
      </Button>
    </Box>
  );
}

export default SearchDepartments;
