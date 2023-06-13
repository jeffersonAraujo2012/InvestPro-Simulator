import { ReactNode, createContext, useState } from "react";
import { StockDataProps } from "../protocols";

type StockGraphContextProps = {
  selectedStock: string;
  setSelectedStock: React.Dispatch<React.SetStateAction<string>>;
  selectedStockData?: StockDataProps;
  setSelectedStockData: React.Dispatch<React.SetStateAction<StockDataProps | undefined>>;
  selectedRange: string;
  setSelectedRange: React.Dispatch<React.SetStateAction<string>>;
};

const StockGraphContext = createContext<StockGraphContextProps>({} as StockGraphContextProps);
export default StockGraphContext;

export function StockGraphProvider({ children }: { children: ReactNode }) {
  const [selectedStock, setSelectedStock] = useState<string>("PETR4");
  const [selectedStockData, setSelectedStockData] = useState<StockDataProps>();
  const [selectedRange, setSelectedRange] = useState<string>("1mo");

  return (
    <StockGraphContext.Provider
      value={{
        selectedStock,
        setSelectedStock,
        selectedStockData,
        setSelectedStockData,
        selectedRange,
        setSelectedRange,
      }}
    >
      {children}
    </StockGraphContext.Provider>
  );
}
