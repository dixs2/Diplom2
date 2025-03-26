import CardsCountrys from "../../../components/CardsCountrys";
import { useGetCountryQuery } from "../../../api/endpoints/worldMap";

export default function Africa() {
  const { data, isError } = useGetCountryQuery("Africa");

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
