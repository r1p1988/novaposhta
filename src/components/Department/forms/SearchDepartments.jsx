import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actFetchDepartmentsRequest } from "../../../store/global/action";

import { Box, Button, TextField } from "@mui/material";
import Input from "@mui/joy/Input";

function SearchDepartments({
  city,
  setCity,
  setCurrentPage,
  WarehouseId,
  setWarehouseId,
  isShow,
  setIsShow,
}) {
  // const [city, setCity] = useState("");
  // const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actFetchDepartmentsRequest("Київ"));
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" && WarehouseId === "") {
      setIsShow(true);
    } else {
      setIsShow(false);
      setCurrentPage(1);
      dispatch(actFetchDepartmentsRequest(city, WarehouseId));
    }
  };
  return (
    <>
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
          value={city}
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
        <Button
          sx={{ textTransform: `none` }}
          variant="contained"
          type="submit"
        >
          Знайти
        </Button>
      </Box>
      {isShow ? (
        <Box sx={{ color: `black` }} component="div">
          Місто чи відділення не знайдено.
        </Box>
      ) : null}
    </>
  );
}

export default SearchDepartments;
