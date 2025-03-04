import CardsCountrys from "../../../components/CardsCountrys";
import { useGetCountryQuery } from "../../../api/endpoints/worldMap";

export default function Africa() {
  const { data, isError, status } = useGetCountryQuery("Africa");

  const renderPosts = () => {
    if (isError) {
      return isError;
    }
    if (status === "fulfilled") return <CardsCountrys countries={data} />;
  };

  return <>{renderPosts()}</>;
}
