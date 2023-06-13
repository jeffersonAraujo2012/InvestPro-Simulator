import { useContext } from "react";
import StockGraphBtn from "./StockGraphBtn";
import StockGraphContext from "../../contexts/StockGraphProvider";

export default function StockGraphController() {
  const { selectedRange, setSelectedRange } = useContext(StockGraphContext);

  return (
    <div className="flex justify-between mb-6">
      <div className="flex [&>button]:mr-4">
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          classNameSelected="bg-black text-white"
          text="1 Mês"
          onClick={() => {
            setSelectedRange("1mo");
          }}
          selected={selectedRange === "1mo"}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          classNameSelected="bg-black text-white"
          text="3 Meses"
          onClick={() => {
            setSelectedRange("3mo");
          }}
          selected={selectedRange === "3mo"}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          classNameSelected="bg-black text-white"
          text="6 Meses"
          onClick={() => {
            setSelectedRange("6mo");
          }}
          selected={selectedRange === "6mo"}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          classNameSelected="bg-black text-white"
          text="1 Ano"
          onClick={() => {
            setSelectedRange("1y");
          }}
          selected={selectedRange === "1y"}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          classNameSelected="bg-black text-white"
          text="2 Anos"
          onClick={() => {
            setSelectedRange("2y");
          }}
          selected={selectedRange === "2y"}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          classNameSelected="bg-black text-white"
          text="5 Anos"
          onClick={() => {
            setSelectedRange("5y");
          }}
          selected={selectedRange === "5y"}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          classNameSelected="bg-black text-white"
          text="10 Anos"
          onClick={() => {
            setSelectedRange("10y");
          }}
          selected={selectedRange === "10y"}
        />
      </div>

      <div className="flex [&>button]:ml-4">
        <StockGraphBtn
          className="bg-[#081a51] text-white"
          text="Comprar"
          onClick={() => {}}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          text="Vender"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
