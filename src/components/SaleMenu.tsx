import { useContext, useState } from "react";
import StockGraphContext from "../contexts/StockGraphProvider";
import { AiOutlineClose } from "react-icons/ai";
import BlackFullScreen from "./BlackFullScreen";
import HorizontalDivider from "./utils/HorizontalDivider";
import { Button, styled } from "@mui/material";

interface IHideSaleMenu {
  hideSaleMenu: () => void;
}

export default function SaleMenu({ hideSaleMenu }: IHideSaleMenu) {
  const { selectedStockData } = useContext(StockGraphContext);
  const [numStock, setNumStock] = useState(100);
  const balance = 10000;

  return (
    <BlackFullScreen>
      <div className="relative bg-white rounded-[8px] w-5/12 p-12">
        <AiOutlineClose
          className="absolute top-8 right-8 w-8 h-8 fill-[#1C1F37] cursor-pointer"
          onClick={() => {
            hideSaleMenu();
          }}
        />

        <div className="flex justify-center">
          <img
            src={selectedStockData?.logourl}
            alt={selectedStockData?.symbol}
            className="rounded-full w-28"
          />
        </div>

        <p className="font-['Manrope'] font-bold text-3xl text-[#1C1F37] text-center mt-4">
          {selectedStockData?.shortName}
        </p>

        <HorizontalDivider />

        <p className="flex justify-center font-['Manrope'] text-lg">
          Quantidade de ações:
        </p>
        <div className="flex justify-center items-center font-['Manrope'] text-5xl">
          <button
            className="text-[#c0bdbd] hover:text-[#848484] px-2"
            onClick={() => {
              if (numStock === 1) return;
              setNumStock(numStock - 1);
            }}
          >
            -
          </button>
          <input
            type="number"
            inputMode="numeric"
            className="w-72 text-center !appearance-none"
            onChange={(e) => {
              const value = Number(e.currentTarget.value);
              if (value < 1) {
                setNumStock(1);
                return;
              }
              setNumStock(value);
            }}
            value={numStock}
          />
          <button
            className="text-[#c0bdbd] hover:text-[#848484] px-2"
            onClick={() => setNumStock(numStock + 1)}
          >
            +
          </button>
        </div>

        <p className="flex justify-center font-['Manrope'] text-lg mt-4">
          Valor total:
        </p>
        <div className="flex justify-center items-center font-['Manrope'] text-5xl">
          <p className="w-72 text-center !appearance-none">
            {"R$ " +
              (numStock * (selectedStockData?.regularMarketPrice || 0)).toFixed(
                2
              )}
          </p>
        </div>

        <HorizontalDivider />

        <div className="font-['Manrope'] [&>p]:mb-1 [&>p]:text-xl [&>p]:flex [&>p]:justify-between mb-4">
          <p>
            <span className="font-bold">Quantidade em carteira:</span>
            <span>{200}</span>
          </p>

          <p>
            <span className="font-bold">Quantidade em carteira após a venda:</span>
            <span>{200 - numStock}</span>
          </p>

          <p>
            <span className="font-bold">Saldo atual:</span>
            <span>{"R$ " + balance.toFixed(2).toLocaleString()}</span>
          </p>

          <p>
            <span className="font-bold">Valor da venda:</span>
            <span>
              {"R$ " +
                (
                  numStock * (selectedStockData?.regularMarketPrice || 0)
                ).toFixed(2)}
            </span>
          </p>

          <p>
            <span className="font-bold">Saldo após a venda:</span>
            <span>
              {"R$ " +
                (
                  balance +
                  numStock * (selectedStockData?.regularMarketPrice || 0)
                ).toFixed(2)}
            </span>
          </p>
        </div>

        <ButtonStyled fullWidth>Vender</ButtonStyled>
      </div>
    </BlackFullScreen>
  );
}

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "1.25rem",
  color: theme.palette.getContrastText("rgb(23, 37, 84)"),
  backgroundColor: "rgb(23, 37, 84)",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgb(21, 34, 76)",
  },
}));
