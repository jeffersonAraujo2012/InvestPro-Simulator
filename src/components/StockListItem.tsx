import DashboardItemContainer from "./DashboardItemContainer";

interface IStockListItem {
  stockData: {
    logourl: string;
    longName: string;
    symbol: string;
    regularMarketPrice: number;
  };
  quantityInWallet: number;
}

export default function StockListItem({ stockData, quantityInWallet }: IStockListItem) {
  const { logourl, longName, symbol, regularMarketPrice } = stockData;
  return (
    <DashboardItemContainer className="h-32 mt-8" key={symbol}>
      <div className="flex items-center h-full p-4">
        <div className="flex items-center justify-center h-full rounded-full overflow-hidden">
          <img className="h-full w-full" src={logourl} alt={longName} />
        </div>

        <div className="flex flex-col justify-between ml-4 grow font-['Manrope'] text-[#1C1F37]">
          <p className="flex justify-between font-['Manrope'] font-bold text-[#1C1F37] text-2xl">
            <span>{symbol}</span>
            <span>R$ {Number(regularMarketPrice).toFixed(2)}</span>
          </p>

          <p className="flex justify-between text-1xl">
            <span>{longName}</span>
            <span>Último Preço</span>
          </p>

          <div className="border-b border-b-[#DADADA] my-1" />

          <p className="flex justify-between text-1xl">
            <span>
              Valor bruto:{" "}
              <strong>
                R$ {(quantityInWallet * regularMarketPrice).toFixed(2)}
              </strong>
            </span>
            <span>Quantidade: {quantityInWallet}</span>
          </p>
        </div>
      </div>
    </DashboardItemContainer>
  );
}
