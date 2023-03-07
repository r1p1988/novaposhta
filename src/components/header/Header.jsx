import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { actFetchDepartmentsRequest } from "../../store/global/action";

function Header() {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const handleCheckCMR = () => {
    navigation("/");
  };

  const handleDepartmentList = () => {
    dispatch(actFetchDepartmentsRequest("Київ"));
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
