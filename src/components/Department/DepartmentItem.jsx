import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Modal,
  Backdrop,
  Fade,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: `4px`,
          lineHeight: `1.5`,
        },
      },
    },
  },
});

const theme1 = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: "0.6rem",
          },
        },
      },
    },
  },
});

function DepartmentItem({ item }) {
  const WarehouseCategory = {
    Postomat: `П-т`,
    Branch: `Відд`,
    Store: `пункт`,
  };

  const ModalWarehouseCategory = {
    Postomat: `поштомат`,
    Branch: `відділення`,
    Store: `пункт «нова пошта»`,
  };

  const Services = {
    BicycleParking: `Велопарковка`,
    CanGetMoneyTransfer: `Грошові перекази`,
    InternationalShipping: `Міжнародне відправлення`,
    POSTerminal: `Оплата карткою`,
    SelfServiceWorkplacesCount: `Зона самообслуговування`,
    GeneratorEnabled: `Генератор`,
  };

  const [modalActive, SetModalActive] = useState(false);
  const handleOpen = () => SetModalActive(true);
  const handleClose = () => SetModalActive(false);

  const { Warehouse } = useSelector((state) => state.global);

  const WareHouseTypes = Warehouse.map((items) => {
    if (items.Ref === item.TypeOfWarehouse) return items.Description;
  });

  return (
    <>
      <TableRow>
        <ThemeProvider theme={theme1}>
          <TableCell
            sx={{
              textAlign: `center`,
            }}
          >
            {item.CityDescription}
          </TableCell>
          <TableCell
            sx={{
              textAlign: `center`,
              fontWeight: `bold`,
            }}
          >
            <span
              onClick={() => handleOpen()}
              style={{ borderBottom: `1px solid #999`, cursor: `pointer` }}
            >
              {WarehouseCategory[item.CategoryOfWarehouse]} {item.Number}
            </span>
          </TableCell>
          <TableCell
            sx={{
              textAlign: `left`,
            }}
          >
            {item.ShortAddress}
          </TableCell>
          <TableCell
            sx={{
              textAlign: `center`,
            }}
          >
            До {item.PlaceMaxWeightAllowed} кг
          </TableCell>
        </ThemeProvider>
      </TableRow>
      <Modal
        open={modalActive}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalActive}>
          <Box sx={style}>
            <h2>
              {item.CityDescription}{" "}
              {ModalWarehouseCategory[item.CategoryOfWarehouse]} №{item.Number}
            </h2>
            <p style={{ textAlign: `left`, margin: `3px` }}>
              <b>Адреса:</b>{" "}
              {item.ShortAddress.substring(
                item.ShortAddress.indexOf(" "),
                item.ShortAddress.length
              )}
            </p>
            <p style={{ textAlign: `left`, margin: `3px` }}>
              <b>Цифрова адреса:</b> {item.WarehouseIndex}
            </p>
            <p style={{ textAlign: `left`, margin: `3px` }}>
              <b>Тип:</b> {WareHouseTypes}
            </p>
            <p style={{ textAlign: `left`, margin: `3px` }}>
              <b>Обмеження ваги:</b> До {item.PlaceMaxWeightAllowed} кг
            </p>
            <p style={{ textAlign: `left`, margin: `3px` }}>
              <b>Обмеження за габаритами (см):</b>{" "}
              {item.SendingLimitationsOnDimensions.Width} x{" "}
              {item.SendingLimitationsOnDimensions.Height} x{" "}
              {item.SendingLimitationsOnDimensions.Length}
            </p>
            {item.CategoryOfWarehouse !== `Postomat` ? (
              <>
                <p style={{ textAlign: `left`, margin: `3px` }}>
                  <b>Доступні послуги та сервіси:</b>
                </p>
                <ul style={{ textAlign: `left`, margin: `3px` }}>
                  {item.BicycleParking === "1" ? (
                    <li>{Services.BicycleParking}</li>
                  ) : null}
                  {item.CanGetMoneyTransfer === "1" ? (
                    <li>{Services.CanGetMoneyTransfer}</li>
                  ) : null}
                  {item.InternationalShipping === "1" ? (
                    <li>{Services.InternationalShipping}</li>
                  ) : null}
                  {item.POSTerminal === "1" ? (
                    <li>{Services.POSTerminal}</li>
                  ) : null}
                  {item.SelfServiceWorkplacesCount === "1" ? (
                    <li>{Services.SelfServiceWorkplacesCount}</li>
                  ) : null}
                  {item.GeneratorEnabled === "1" ? (
                    <li>{Services.GeneratorEnabled}</li>
                  ) : null}
                </ul>
              </>
            ) : null}

            <Table
              sx={{
                bgcolor: `#fff4f4`,
                color: `#1B1212`,
                border: "1px solid #b3abab",
                borderRadius: `10px`,
                borderCollapse: `inherit`,
                textAlign: `center`,
                justifyContent: `center`,
                marginTop: `10px`,
              }}
            >
              <TableHead>
                <TableRow>
                  <ThemeProvider theme={theme}>
                    <TableCell></TableCell>
                    <TableCell>пн</TableCell>
                    <TableCell>вт</TableCell>
                    <TableCell>ср</TableCell>
                    <TableCell>чт</TableCell>
                    <TableCell>пт</TableCell>
                    <TableCell>сб</TableCell>
                    <TableCell>нд</TableCell>
                  </ThemeProvider>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <ThemeProvider theme={theme}>
                    <TableCell>Графік роботи</TableCell>
                    {Object.values(item.Schedule).map((items) => (
                      <TableCell>{items}</TableCell>
                    ))}
                  </ThemeProvider>
                </TableRow>
                <TableRow>
                  <ThemeProvider theme={theme}>
                    <TableCell>
                      Прийом відправлення для відправки в той же день
                    </TableCell>
                    {Object.values(item.Delivery).map((items) => (
                      <TableCell>{items}</TableCell>
                    ))}
                  </ThemeProvider>
                </TableRow>
                <TableRow>
                  <ThemeProvider theme={theme}>
                    <TableCell>Час прибуття відправлень</TableCell>
                    {Object.values(item.Reception).map((items) => (
                      <TableCell>{items}</TableCell>
                    ))}
                  </ThemeProvider>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default DepartmentItem;
