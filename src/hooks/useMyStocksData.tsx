import { useEffect, useState } from "react";
import axios from "axios";
import useMyStocks, { MyStockProps } from "./useMyStocks";
import { StockDataProps } from "../protocols";

type MyStockDataProps = {
  [key: string]: StockDataProps;
};

type MyStockDataHookReturn = [
  MyStockProps[],
  MyStockDataProps,
  React.Dispatch<React.SetStateAction<MyStockDataProps>>
];

export default function useMyStocksData(): MyStockDataHookReturn {
  const [myStocksData, setMyStocksData] = useState<MyStockDataProps>(
    {} as MyStockDataProps
  );
  const [myStocks] = useMyStocks();

  const data = {} as any;
  const promises: Promise<any>[] = [];

  useEffect(() => {
    myStocks.forEach((stock) => {
      const promise = axios.get(
        "https://brapi.dev/api/quote/" +
          stock.name +
          "?range=1d&interval=1d&fundamental=true&dividends=true"
      );
      promises.push(promise);
    });

    Promise.all(promises).then((responses) => {
      responses.forEach((response) => {
        data[response.data.results[0].symbol] = response.data.results[0];
      });
      setMyStocksData(data);
    });
  }, []);

  return [myStocks, myStocksData, setMyStocksData];
}
