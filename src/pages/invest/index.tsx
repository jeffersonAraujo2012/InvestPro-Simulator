import Slider from "react-slick";
import LayoutTemplate from "../../components/LayoutTemplate";
import DashboardItemContainer from "../../components/DashboardItemContainer";
import useMyStocksData from "../../hooks/useMyStocksData";
import StockCard from "../../components/StockCard";
import StockGraph from "../../components/StockGraph";

export default function StockCarousel() {
  const [myStocks, myStocksData] = useMyStocksData();

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  if (Object.keys(myStocksData).length === 0) return <></>;

  return (
    <LayoutTemplate headerTitle="Investir">
      <DashboardItemContainer className="flex py-14 font-['Manrope'] mb-6">
        <Slider {...settings} className="w-full h-36 [&_div.slick-slide]:mr-5">
          {myStocks.map((stock) => {
            return (
              <StockCard
                stockData={myStocksData[stock.name]}
                key={stock.name}
              />
            );
          })}
        </Slider>
      </DashboardItemContainer>

      <StockGraph />
    </LayoutTemplate>
  );
}
