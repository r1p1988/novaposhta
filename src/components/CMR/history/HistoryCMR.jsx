import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveHistory } from "../../../store/global/action";
import HistoryItem from "./HistoryItem";

function HistoryCMR() {
  const { History } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  // const renderHistory = (list) => {
  //   <ul>
  //     {list.map((item) => (
  //       <HistoryItem key={item} item={item} />
  //     ))}
  //   </ul>;
  // };

  const ClearHistoryCMR = () => {
    dispatch(RemoveHistory());
    localStorage.removeItem(`CMR`);
  };

  return (
    <div>
      <p>Історія</p>
      {History === undefined || History.length === 0 ? null : (
        <ul>
          {History.map((item) => (
            <HistoryItem key={item} item={item} />
          ))}
        </ul>
      )}
      <button onClick={() => ClearHistoryCMR()}>Очисти все ТТН</button>
    </div>
  );
}

export default HistoryCMR;
