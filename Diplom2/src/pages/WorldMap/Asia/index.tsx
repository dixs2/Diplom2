import { useGetCountryQuery } from "../../../api/endpoints/worldMap";
import CardsCountrys from "../../../components/CardsCountrys";

export default function Asia() {
  const { data, isError } = useGetCountryQuery("Asia");

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
