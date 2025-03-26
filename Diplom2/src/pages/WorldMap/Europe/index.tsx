import { useGetCountryQuery } from "../../../api/endpoints/worldMap";
import CardsCountrys from "../../../components/CardsCountrys";

export default function Europe() {
  const { data, isError } = useGetCountryQuery("Europe");

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
