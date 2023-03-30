import React from "react";
import { useDispatch } from "react-redux";

import {
  actFetchDepartmentsRequest,
  GetMessageCodeDepartment,
  RemoveDepartmentError,
  RemoveDepartmentMessageCode,
  RemoveDepartments,
} from "../../../store/global/action";

import { Box, Button, TextField } from "@mui/material";

function SearchDepartments({
  city,
  setCity,
  setCurrentPage,
  WarehouseId,
  setWarehouseId,
}) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" && WarehouseId === "") {
      dispatch(GetMessageCodeDepartment("Місто чи відділеня не знайдено"));
    } else {
      setCurrentPage(1);
      dispatch(actFetchDepartmentsRequest(city, WarehouseId));
    }
  };

  const handleCityValue = (e) => {
    setCity(e.target.value);
    if (!e.target.value) {
      dispatch(RemoveDepartments());
      dispatch(RemoveDepartmentError());
      dispatch(RemoveDepartmentMessageCode());
    }
  };

  const handleWarehouseId = (e) => {
    setWarehouseId(e.target.value);
    if (!e.target.value) {
      dispatch(RemoveDepartments());
      dispatch(RemoveDepartmentError());
      dispatch(RemoveDepartmentMessageCode());
    }
  };
  return (
    <Box
      sx={{
        mb: 2,
        display: `flex`,
        flexDirection: { xs: `column`, sm: `row` },
        width: { xs: `350px`, sm: `100%` },
        justifyContent: `center`,
        margin: `auto`,
      }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      <TextField
        sx={{ mr: { sm: 2 }, marginBottom: { xs: `10px`, sm: `0` } }}
        label="Місто"
        value={city}
        size="small"
        onChange={(e) => handleCityValue(e)}
      />
      <TextField
        sx={{ mr: { sm: 2 }, marginBottom: { xs: `10px`, sm: `0` } }}
        label="Номер відділення"
        value={WarehouseId}
        size="small"
        onChange={(e) => handleWarehouseId(e)}
      />
      <Button sx={{ textTransform: `none` }} variant="contained" type="submit">
        Знайти
      </Button>
    </Box>
  );
}

export default SearchDepartments;
