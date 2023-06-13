import { useContext } from "react";
import { StockDataProps } from "../protocols";
import StockGraphContext from "../contexts/StockGraphProvider";

interface IStockCard {
  stockData: StockDataProps;
}

export default function StockCard({ stockData }: IStockCard) {
  const {setSelectedStock} = useContext(StockGraphContext);
  const isRising = stockData.regularMarketChangePercent >= 0;

  return (
    <div
      className="flex flex-col justify-between h-36 w-64 cursor-pointer"
      onClick={() => setSelectedStock(stockData.symbol)}
    >
      <div className="flex items-center justify-between">
        <img
          className="w-[3.75rem] h-[3.75rem] rounded-full mr-2"
          src={stockData.logourl}
        />

        <div className="flex flex-col items-end">
          <p className="text-2xl font-bold">{stockData.symbol}</p>
          <p className="text-lg text-[#7A7A7A]">{stockData.shortName}</p>
        </div>
      </div>

      <div>
        <p className="flex justify-between items-center text-lg text-[#7A7A7A]">
          <span>Cotação atual: </span>
          <span className="text-black">
            {"R$ " + stockData.regularMarketPrice.toFixed(2)}
          </span>
        </p>

        <p className="flex justify-between items-center text-lg text-[#7A7A7A]">
          <span>Retorno do dia:</span>
          <span className={isRising ? "text-green-600" : "text-red-600"}>
            {stockData.regularMarketChangePercent.toFixed(2) + "%"}
          </span>
        </p>
      </div>
    </div>
  );
}
