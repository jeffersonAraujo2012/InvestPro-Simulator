import { useContext, useState } from "react";
import StockGraphBtn from "./StockGraphBtn";
import StockGraphContext from "../../contexts/StockGraphProvider";
import BuyMenu from "../BuyMenu";
import SaleMenu from "../SaleMenu";

export default function StockGraphController() {
  const { selectedRange, setSelectedRange } = useContext(StockGraphContext);
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  const [showSaleMenu, setShowSaleMenu] = useState(false);

  const listBtnRange = [
    { text: "1 Mês", value: "1mo" },
    { text: "3 Meses", value: "3mo" },
    { text: "6 Meses", value: "6mo" },
    { text: "1 Ano", value: "1y" },
    { text: "2 Anos", value: "2y" },
    { text: "5 Anos", value: "5y" },
    { text: "10 Anos", value: "10y" },
  ];

  return (
    <div className="flex justify-between mb-6">
      <div className="flex [&>button]:mr-4">
        {listBtnRange.map((BtnRange) => {
          return (
            <StockGraphBtn
              key={BtnRange.value}
              className="border border-[#c0bdbd] text-black"
              classNameSelected="bg-black text-white"
              text={BtnRange.text}
              onClick={() => {
                setSelectedRange(BtnRange.value);
              }}
              selected={selectedRange === BtnRange.value}
            />
          );
        })}
      </div>

      <div className="flex [&>button]:ml-4">
        <StockGraphBtn
          className="bg-[#081a51] text-white"
          text="Comprar"
          onClick={() => {
            setShowBuyMenu(true);
          }}
        />
        <StockGraphBtn
          className="border border-[#c0bdbd] text-black"
          text="Vender"
          onClick={() => {
            setShowSaleMenu(true);
          }}
        />
      </div>

      {showBuyMenu && <BuyMenu hideBuyMenu={() => setShowBuyMenu(false)} />}
      {showSaleMenu && <SaleMenu hideSaleMenu={() => setShowSaleMenu(false)} />}
    </div>
  );
}
