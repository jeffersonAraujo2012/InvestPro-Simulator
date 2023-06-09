import Header from "../../components/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardItemContainer from "../../components/DashboardItemContainer";
ChartJS.register(ArcElement, Tooltip, Legend);

import SideMenu from "../../components/SideMenu";
import DashboardItemHeader from "../../components/DashboardItemHeader";
import CustomDoughnut from "../../components/CustomDoughnut";
import useMyStocksData from "../../hooks/useMyStocksData";
import StockListItem from "../../components/StockListItem";

export default function Dashboard() {
  const [myStocks, myStocksData] = useMyStocksData();

  function getSumInvest() {
    let sum = 0;
    myStocks.forEach((stock) => {
      sum += myStocksData[stock.name].regularMarketPrice * stock.quantity;
    });
    return sum;
  }

  if (myStocks.length === 0 || Object.keys(myStocksData).length === 0) return <></>;

  return (
    <div className="flex w-screen h-screen">
      <SideMenu />

      <div className="w-full h-full">
        <Header />

        <main className="w-full h-full pt-[6.625rem] pb-4 px-8 bg-[#F8F9FF] overflow-scroll">
          <section className="resumo flex [&>div:first-child]:mr-8">
            <DashboardItemContainer className="grow">
              <DashboardItemHeader text="Resumo Gráfico" />

              <div className="flex items-center min-w-[36rem] min-h-[24rem] h-fit p-6">
                <CustomDoughnut />
              </div>
            </DashboardItemContainer>

            <DashboardItemContainer className="flex flex-col">
              <DashboardItemHeader text="Resumo da Carteira" />

              <div className="flex flex-col items-center justify-center grow p-6 font-['Manrope'] text-center text-2xl text-[#1C1F37] font-bold">
                <p>Patrimônio da Carteira</p>
                <p className="text-3xl font-normal mt-1">R$ {getSumInvest().toFixed(2)}</p>

                <div className="my-4" />

                <p>Total investido</p>
                <p className="text-3xl font-normal mt-1">R$ {getSumInvest().toFixed(2)}</p>

                <div className="my-4" />

                <p>Total em Caixa</p>
                <p className="text-3xl font-normal mt-1">R$ 0.00</p>
              </div>
            </DashboardItemContainer>
          </section>

          {myStocks.map((stock) => {
            return (
              <StockListItem
                key={stock.name}
                stockData={myStocksData[stock.name]}
                quantityInWallet={stock.quantity}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
