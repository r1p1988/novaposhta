import React from "react";
import { useNavigate } from "react-router";

import Button from "@mui/material/Button";

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
      <Button variant="contained" onClick={() => handleCheckCMR()}>
        Перевірити ТТН
      </Button>
      <Button variant="contained" onClick={() => handleDepartmentList()}>
        Список відділень
      </Button>
    </>
  );
}

export default Header;
