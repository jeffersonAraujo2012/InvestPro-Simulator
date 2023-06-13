export type DataPrice = {
  date: number;
  open: number;
  hight: number;
  low: number;
  close: number;
  volume: number;
  adjustedClose: number;
};

export type StockDataProps = {
  logourl: string;
  shortName: string;
  longName: string;
  symbol: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
  historicalDataPrice: DataPrice[];
};
