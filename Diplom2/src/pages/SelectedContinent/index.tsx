import { useParams } from "react-router";
import { useGetCountryByTitleQuery } from "../../api/endpoints/worldMap";
import SelectedCountryCard from "./SelectedCountryCard";

export default function SelectedCountry() {
  const { continentTitle, countryTitle } = useParams();

  console.log(countryTitle);

  const { data, isError, status } = useGetCountryByTitleQuery({
    continent: continentTitle,
    title: countryTitle,
  });

  const renderSelected = () => {
    if (isError) {
      return isError;
    }
    if (data) {
      return <SelectedCountryCard country={data[0]}></SelectedCountryCard>;
    }
  };

  return <>{renderSelected()}</>;
}
