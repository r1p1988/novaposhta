import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actFetchDepartmentsRequest } from "../../../store/global/action";

function SearchDepartments() {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actFetchDepartmentsRequest(city));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Місто"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Знайти</button>
    </form>
  );
}

export default SearchDepartments;
