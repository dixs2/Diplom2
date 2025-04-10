import { useParams } from "react-router";
import SelectedCountryCard from "../../components/SelectedCountryCard";
import { useGetUserQuery } from "../../api/endpoints/user";
import { getUserKey } from "../../components/CreateCountryForm";

export default function SelectedMyCountry() {
  const { myContinentTitle, myCountryTitle } = useParams();
  const { data, isError } = useGetUserQuery("");

  const renderSelected = () => {
    if (isError) {
      return isError;
    }
    if (data) {
      let continet = getUserKey(myContinentTitle || "");
      let country = data[0][continet].find(
        (country) => country.title === myCountryTitle
      );
      return <SelectedCountryCard country={country}></SelectedCountryCard>;
    }
  };

  return <>{renderSelected()}</>;
}
