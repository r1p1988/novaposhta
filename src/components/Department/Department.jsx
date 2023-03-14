import React from "react";
import { useSelector } from "react-redux";
import DepartmentItem from "./DepartmentItem";

function Department() {
  const { Departments } = useSelector((state) => state.global);

  // const renderTable = (list) => {
  //   <table>
  //     <tr>
  //       <th>Місто</th>
  //       <th>Адреса</th>
  //       <th>Обмеження ваги</th>
  //     </tr>
  //     {list.map((item) => (
  //       <DepartmentItem key={item.Number} item={item} />
  //     ))}
  //   </table>;
  // };

  // const renderError = () => {
  //   <div>
  //     <p>Місто не знайдено. Будь ласка введіть коректну назву міста.</p>
  //   </div>;
  // };

  return (
    <>
      {Departments.length !== 0 ? (
        <table>
          <tr>
            <th>Місто</th>
            <th>Адреса</th>
            <th>Обмеження ваги</th>
          </tr>
          {Departments.map((item) => (
            <DepartmentItem key={item.Number} item={item} />
          ))}
        </table>
      ) : (
        <div>
          <p>Місто не знайдено. Будь ласка введіть коректну назву міста.</p>
        </div>
      )}
    </>
  );
}

export default Department;
