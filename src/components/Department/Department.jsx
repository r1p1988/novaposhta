import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DepartmentItem from "./DepartmentItem";
import Pagination from "../../Pagination";
import Modal from "../Modal/Modal";
import { actFetchWarehouseTypesRequest } from "../../store/global/action";

import { Table, TableBody, TableHead, TableRow } from "@mui/material";

function Department({ currentPage, setCurrentPage, city, WarehouseId }) {
  const { Departments } = useSelector((state) => state.global);
  const { Total_Count } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  let PageSize = 20;

  // const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    // const firstPageIndex = (currentPage - 1) * PageSize;
    // const lastPageIndex = firstPageIndex + PageSize;
    const firstPageIndex = 0;
    const lastPageIndex = Departments.length;
    return Departments.slice(firstPageIndex, lastPageIndex);
  }, [Departments, currentPage]);

  useEffect(() => {
    dispatch(actFetchWarehouseTypesRequest());
  }, []);

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
          <Table
            sx={{
              bgcolor: `#fff4f4`,
              color: `#1B1212`,
              border: "1px solid #b3abab",
              borderRadius: 2,
            }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <th>Місто</th>
                <th>Відділення / Поштомат</th>
                <th>Адреса</th>
                <th>Обмеження ваги</th>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentTableData.map((item, idx) => (
                <DepartmentItem key={item.SiteKey} item={item} />
              ))}
            </TableBody>
          </Table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            // totalCount={Departments.length}
            totalCount={Total_Count}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          {/* <Modal active={modalActive} setActive={SetModalActive} /> */}
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
