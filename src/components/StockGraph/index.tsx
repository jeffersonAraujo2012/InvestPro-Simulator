import { useContext, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import DashboardItemContainer from "../DashboardItemContainer";
import StockGraphHeader from "./StockGraphHeader";
import StockGraphController from "./StockGraphController";
import StockGraphArea from "./StockGraphArea";
import StockGraphContext from "../../contexts/StockGraphProvider";
import { StockDataProps } from "../../protocols";
import HorizontalDivider from "../utils/HorizontalDivider";

type StockDataResponse = {
  results: StockDataProps[];
};

export default function StockGraph() {
  const { selectedStock } = useContext(StockGraphContext);
  const { selectedStockData, setSelectedStockData} = useContext(StockGraphContext);
  const { selectedRange } = useContext(StockGraphContext);

  useEffect(() => {
    console.log(selectedRange);
    const stockDataRequest = axios.get(
      `https://brapi.dev/api/quote/${selectedStock}?range=${selectedRange}&interval=1d&fundamental=true`
    );
    stockDataRequest.then((result: AxiosResponse<StockDataResponse>) => {
      setSelectedStockData(result.data.results[0]);
    });
  }, [selectedRange, selectedStock]);

  if (!selectedStockData) return <></>;

  return (
    <DashboardItemContainer className="px-12 py-9">
      <StockGraphHeader stockData={selectedStockData} />

      <HorizontalDivider />

      <StockGraphController />

      <div className="w-full h-[36rem]">
        <StockGraphArea />
      </div>
    </DashboardItemContainer>
  );
}
