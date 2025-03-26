import { useGetCountryQuery } from "../../../api/endpoints/worldMap";
import CardsCountrys from "../../../components/CardsCountrys";

export default function Australia() {
  const { data, isError } = useGetCountryQuery("Australia");

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
