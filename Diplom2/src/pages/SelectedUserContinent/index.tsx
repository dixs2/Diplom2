import { useParams } from "react-router";
import SelectedCountryCard from "../../components/SelectedCountryCard";
import {
  useGetUserByNameQuery,
  useGetUserQuery,
  User,
} from "../../api/endpoints/user";
import { getUserKey } from "../../components/CreateCountryForm";

export default function SelectedUserCountry() {
  const { userName, userContinentTitle, userCountryTitle } = useParams();
  const { data, isError } = useGetUserByNameQuery(userName || "");

  const renderSelected = () => {
    if (isError) {
      return isError;
    }
    if (data) {
      let user: User | any = data.find((user) => user.name === userName);
      let continet = getUserKey(userContinentTitle || "");
      let country = user[continet].find(
        (country: any) => country.title === userCountryTitle
      );
      return <SelectedCountryCard country={country}></SelectedCountryCard>;
    }
  };

  return <>{renderSelected()}</>;
}
