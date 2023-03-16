import React from "react";
import { useNavigate } from "react-router";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Header() {
  const navigation = useNavigate();

  const handleCheckCMR = () => {
    navigation("/");
  };

  const handleDepartmentList = () => {
    navigation("/departments");
  };

  return (
    <>
      <ButtonGroup variant="contained" sx={{ m: 3, p: 1 }}>
        <Button
          sx={{ textTransform: `none` }}
          variant="contained"
          onClick={() => handleCheckCMR()}
        >
          Перевірити ТТН
        </Button>
        <Button
          sx={{ textTransform: `none` }}
          variant="contained"
          onClick={() => handleDepartmentList()}
        >
          Список відділень
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Header;
