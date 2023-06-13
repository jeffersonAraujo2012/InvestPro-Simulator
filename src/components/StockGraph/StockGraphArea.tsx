import { useContext } from "react";
import Chart from "react-apexcharts";
import StockGraphContext from "../../contexts/StockGraphProvider";

export default function StockGraphArea() {
  const { selectedStockData } = useContext(StockGraphContext);

  function generateDateArray() {
    return selectedStockData?.historicalDataPrice.map((datePrice) => {
      return new Date(datePrice.date * 1000).toLocaleDateString();
    });
  }

  function generateSerieArray() {
    return selectedStockData?.historicalDataPrice.map((datePrice) => {
      return Number(datePrice.close.toFixed(2));
    });
  }

  function generateOptionGraph() {
    return {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: generateDateArray(),
        labels: {
          rotate: -45,
          rotateAlways: true,
        },
        tickAmount: 20,
      },
    };
  }

  function generateSerieGraph() {
    return [
      {
        name: selectedStockData?.symbol,
        data: generateSerieArray() as number[],
      },
    ];
  }

  return (
    <Chart
      options={generateOptionGraph()}
      series={generateSerieGraph()}
      type="line"
      width="100%"
      height="100%"
    />
  );
}
