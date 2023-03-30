import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import DepartmentItem from "./DepartmentItem";
import Pagination from "../../Pagination";
import { actFetchWarehouseTypesRequest } from "../../store/global/action";

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: `5px`,
          backgroundColor: `#fff4f4`,
          lineHeight: `1.5`,
          textAlign: `center`,
          fontWeight: `bold`,
        },
      },
    },
  },
});

function Department({ currentPage, setCurrentPage }) {
  const { Departments, Total_Count } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  let PageSize = 20;

  const currentTableData = useMemo(() => {
    const firstPageIndex = 0;
    const lastPageIndex = Departments.length;
    return Departments.slice(firstPageIndex, lastPageIndex);
  }, [Departments, currentPage]);

  useEffect(() => {
    dispatch(actFetchWarehouseTypesRequest());
  }, []);

  return (
    <Box
      component="div"
      sx={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        textAlign: `center`,
        maxWidth: { md: `700px` },
        margin: `auto`,
      }}
    >
      <Table
        sx={{
          bgcolor: `#fff4f4`,
          color: `#1B1212`,
          border: "1px solid #b3abab",
          borderRadius: 2,
          padding: `5px`,
          marginTop: `15px`,
        }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <ThemeProvider theme={theme}>
              <TableCell>Місто</TableCell>
              <TableCell>Відділення / Поштомат</TableCell>
              <TableCell>Адреса</TableCell>
              <TableCell>Обмеження ваги</TableCell>
            </ThemeProvider>
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
        totalCount={Total_Count}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Box>
  );
}

export default Department;
