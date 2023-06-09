import { useState } from "react";

export type MyStockProps = {
  name: string;
  quantity: number;
};

type MyStocksHook = [MyStockProps[], React.Dispatch<React.SetStateAction<MyStockProps[]>>];

const mockStocks = [
  { name: "PETR4", quantity: 20 },
  { name: "GOAU4", quantity: 120 },
  { name: "IVVB11", quantity: 25 },
  { name: "MGLU3", quantity: 50 },
  { name: "AGRO3", quantity: 70 },
  { name: "VALE3", quantity: 40 },
  { name: "ENAT3", quantity: 100 },
  { name: "GOLL4", quantity: 30 },
];

export default function useMyStocks(): MyStocksHook {
  const [myStocks, setMyStocks] = useState<MyStockProps[]>(mockStocks);

  return [myStocks, setMyStocks];
}
