import { useGetCountryQuery } from "../../../api/endpoints/worldMap";
import CardsCountrys from "../../../components/CardsCountrys";

export default function NorthAmerica() {
  const { data, isError } = useGetCountryQuery("NorthAmerica");

  const renderPosts = () => {
    if (isError) {
      return isError;
    }
    if (data) {
      return <CardsCountrys countries={data} />;
    }
  };

  return <>{renderPosts()}</>;
}
