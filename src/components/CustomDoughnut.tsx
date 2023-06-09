import { ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import colors from "tailwindcss/colors";
import useMyStocksData from "../hooks/useMyStocksData";

export default function CustomDoughnut() {
  const [myStocks, stocksData] = useMyStocksData();

  const options: ChartOptions = {
    // ... outras opções do gráfico
    layout: {},
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          padding: 10,
          font: {
            size: 16,
            family: "'Manorope',sans-serif",
          },
        },
      },
    },
  };

  const bgColor = [
    colors.blue[950],
    colors.blue[900],
    colors.blue[800],
    colors.blue[700],
    colors.blue[600],
    colors.blue[500],
    colors.blue[400],
    colors.blue[300],
    colors.blue[200],
    colors.blue[100],
    colors.blue[50],
  ];

  function generateGraphData() {
    const matrixStockQuantity: [string, number][] = [];
    const tickets: string[] = [];
    const values: number[] = [];

    myStocks.forEach((stock) => {
      matrixStockQuantity.push([
        stock.name,
        stock.quantity * stocksData[stock.name].regularMarketPrice,
      ]);
    });

    matrixStockQuantity.sort((a, b) => -a[1] + b[1]);

    matrixStockQuantity.forEach((stockQuantity) => {
      tickets.push(stockQuantity[0]);
      values.push(stockQuantity[1]);
    });

    return {
      data: {
        labels: tickets,
        datasets: [
          {
            label: "Resumo da Carteira",
            data: values,
            backgroundColor: bgColor,
            hoverOffset: 4,
          },
        ],
      },
      tickets,
    };
  }

  if (Object.keys(stocksData).length === 0) return <></>;

  return (
    <>
      <div className="flex-1">
        <Doughnut data={generateGraphData().data} options={options} />
      </div>

      <div className="flex-[2_2_0%] ml-6">
        {generateGraphData().tickets.map((ticket, index) => {
          return (
            <p
              className="flex items-center justify-between font-['Manrope'] text-xl font-medium cursor-pointer h-[1.75rem] mb-2 hover:font-bold"
              key={ticket}
            >
              <span className="flex items-center h-full">
                <span
                  className={`inline-block w-6 h-full mr-2`}
                  style={{ backgroundColor: bgColor[index] }}
                />
                {ticket}
              </span>

              <span className="flex items-center justify-between h-full w-32">
                <span>R$</span>
                {" " +
                  (
                    stocksData[ticket].regularMarketPrice *
                    myStocks[index].quantity
                  ).toFixed(2)}
              </span>
            </p>
          );
        })}
      </div>
    </>
  );
}
