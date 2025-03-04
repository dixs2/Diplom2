import { useGetCountryQuery } from "../../../api/endpoints/worldMap";
import CardsCountrys from "../../../components/CardsCountrys";

export default function SouthAmerica() {
  const { data, isError, status } = useGetCountryQuery("SouthAmerica");

  const renderPosts = () => {
    if (isError) {
      return isError;
    }
    if (status === "fulfilled") return <CardsCountrys countries={data} />;
  };

  return <>{renderPosts()}</>;
}
