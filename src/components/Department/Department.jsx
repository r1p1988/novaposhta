import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import DepartmentItem from "./DepartmentItem";
import Pagination from "../../Pagination";
// import actFetchDepartmentsRequest from "../../store/global/action";

function Department({ currentPage, setCurrentPage }) {
  const { Departments } = useSelector((state) => state.global);

  // const dispatch = useDispatch();

  let PageSize = 20;

  // const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    // const firstPageIndex = (currentPage - 1) * PageSize;
    // const lastPageIndex = firstPageIndex + PageSize;
    const firstPageIndex = 0;
    const lastPageIndex = Departments.length;
    return Departments.slice(firstPageIndex, lastPageIndex);
  }, [Departments, currentPage]);

  // useEffect(() => {
  //   dispatch(actFetchDepartmentsRequest(currentPage));
  // }, [currentPage]);

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
        <>
          <table>
            <thead>
              <tr>
                <th>Місто</th>
                <th>Адреса</th>
                <th>Обмеження ваги</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((item) => (
                <DepartmentItem key={item.Number} item={item} />
              ))}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            // totalCount={Departments.length}
            totalCount={3947}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <div>
          <p>
            Місто або номер відділення не знайдено. Будь ласка введіть коректні
            дані.
          </p>
        </div>
      )}
    </>
  );
}

export default Department;
