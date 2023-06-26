import { InputAdornment, TextField, styled } from "@mui/material";
import { w } from "windstitch";
import searchIcon from "../assets/search_icon.svg";
import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import api from "../api";
import DashboardItemContainer from "./DashboardItemContainer";
import StockGraphContext from "../contexts/StockGraphProvider";
import { useNavigate } from "react-router-dom";

interface IHeader {
  title: string;
}

export default function Header({ title }: IHeader) {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const { setSelectedStock } = useContext(StockGraphContext);
  const navigate = useNavigate();

  function searchStock(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault();

    const searchValue = e.currentTarget.value;
    const regex = new RegExp(`^${searchValue}`, "i");
    const regexAntiF = new RegExp("F$", "gi");

    if (!searchValue) {
      setSearchResult([]);
      return;
    }

    const searchPromise = api.get(
      `https://brapi.dev/api/quote/list?sortBy=name&sortOrder=desc&limit=20&search=${searchValue}`
    );
    searchPromise.then((response) => {
      setSearchResult(
        response.data.stocks.filter(
          (stock: any) =>
            regex.test(stock.stock) && !regexAntiF.test(stock.stock)
        )
      );
    });
  }

  function selectStock(stock: any) {
    console.log(stock);
    setSelectedStock(stock);
    navigate("/invest");
  }

  return (
    <HeaderStyle>
      <h1>{title}</h1>

      <div className="relative flex flex-col">
        <CssTextField
          onBlur={() => {
            setTimeout(() => {
              setSearchResult([]);
            },200)
          }}
          onFocus={searchStock}
          onChange={searchStock}
          size="small"
          placeholder="Código do ativo"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={searchIcon} />
              </InputAdornment>
            ),
          }}
        />

        <DashboardItemContainer className="absolute top-full left-0 right-0 z-[9999] result-container">
          {searchResult.map((stock) => {
            return (
              <div
                className="flex items-center h-16 m-4 cursor-pointer"
                onClick={() => {
                  selectStock(stock.stock);
                }}
                key={stock.stock}
              >
                <div className="flex items-center justify-center h-full mr-4 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full"
                    src={stock.logo}
                    alt={stock.name}
                  />
                </div>

                <div className="grow">
                  <p className="flex justify-between font-['Manrope'] font-semibold text-xl">
                    <span>{stock.stock}</span>
                    <span>{"R$" + stock.close.toFixed(2)}</span>
                  </p>

                  <p className="flex justify-between font-['Manrope'] font-medium text-lg">
                    <span className="text-[#848484]">{stock.name}</span>
                    <span
                      className={
                        stock.change >= 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      {stock.change.toFixed(2) + "%"}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </DashboardItemContainer>
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = w.header(`
  fixed
  
  flex
  items-center
  justify-between

  h-[5.625rem] 
  px-14
  header-full-width
  
  bg-white
  border-b-[1px] 
  border-b-[#DADADA]
  z-20

  [&>h1]:font-['Manrope']
  [&>h1]:font-bold
  [&>h1]:text-[2rem]
  [&>h1]:leading-20
  [&>h1]:text-[#1C1F37]
`);

const CssTextField = styled(TextField)({
  "&": {
    backgroundColor: "#F5F7FB",
    borderRadius: "8px",
    border: "#E3E8F1",
  },
  "& *": {
    fontFamily: "'Space Grotesk', sans-serife",
  },
  "&:lastChild": {},
  "& input, & label": {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    color: "rgb(23, 37, 84)",
  },
  "& label.Mui-focused": {
    color: "rgb(23, 37, 84)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(23, 37, 84)",
  },
  "&:hover .MuiInput-underline:before": {
    borderColor: "#E0E0E0",
  },
  "& .MuiInput-root::before": {
    borderColor: "#E0E0E0",
  },
});
