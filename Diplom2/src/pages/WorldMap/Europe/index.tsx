import { useGetCountryQuery } from "../../../api/endpoints/worldMap";
import CardsCountrys from "../../../components/CardsCountrys";

export default function Europe() {
  const { data, isError, status } = useGetCountryQuery("Europe");

  const renderPosts = () => {
    if (isError) {
      return isError;
    }
    if (status === "fulfilled") return <CardsCountrys countries={data} />;
  };

  return <>{renderPosts()}</>;
}
