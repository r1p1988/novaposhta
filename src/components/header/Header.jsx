import React from "react";
import { useNavigate } from "react-router";

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
      <button onClick={() => handleCheckCMR()}>Перевірити ТТН</button>
      <button onClick={() => handleDepartmentList()}>Список відділень</button>
    </>
  );
}

export default Header;
