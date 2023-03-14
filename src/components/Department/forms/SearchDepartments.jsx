import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actFetchDepartmentsRequest } from "../../../store/global/action";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Місто"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Номер відділення"
        value={WarehouseId}
        onChange={(e) => setWarehouseId(e.target.value)}
      />
      <button>Знайти</button>
    </form>
  );
}

export default SearchDepartments;
