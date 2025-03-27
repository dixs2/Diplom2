import { useParams } from "react-router";
import { useGetCountryByTitleQuery } from "../../api/endpoints/worldMap";
import SelectedCountryCard from "./SelectedCountryCard";

export default function SelectedCountry() {
  const { continentTitle, countryTitle } = useParams();

  const { data, isError } = useGetCountryByTitleQuery({
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
