import { StockDataProps } from "../../protocols";

interface IStockGraphHeader {
  stockData: StockDataProps;
}

export default function StockGraphHeader({ stockData }: IStockGraphHeader) {
  return (
    <div className="flex justify-between ">
      <div className="flex items-center font-['Manrope']">
        <img className="rounded-full h-14 w-14" src={stockData.logourl} />
        <div className="ml-4">
          <p className="font-bold text-[#1C1F37] text-3xl">
            {stockData.longName}
          </p>
          <p className="text-[#7A7A7A] text-xl">{stockData.symbol}</p>
        </div>
      </div>

      <div className="flex flex-col items-end ml-4">
        <p className="font-bold text-[#1C1F37] text-3xl">
          R${" " + stockData.regularMarketPrice}
        </p>
        <p className="text-[#7A7A7A] text-xl">
          Última atualização: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
