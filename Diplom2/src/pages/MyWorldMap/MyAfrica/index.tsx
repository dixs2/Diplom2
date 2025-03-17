import CardsCountrys from "../../../components/CardsCountrys";
import { useGetCountryQuery } from "../../../api/endpoints/worldMap";
import { useGetUserQuery } from "../../../api/endpoints/user";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

export default function MyAfrica() {
  const { data, isError, status } = useGetUserQuery("");
  const renderPosts = () => {
    if (isError) {
      return isError;
    }
    if (status === "fulfilled") {
      let dataCountries: DataCountry[] = [];

      if (data !== undefined) {
        dataCountries = data[0].myAfrica;
      }
      if (dataCountries.length === 0) {
        return (
          <Box textAlign={"center"}>"You have not been to this continent"</Box>
        );
      }

      return <CardsCountrys countries={dataCountries} />;
    }
  };

  return <>{renderPosts()}</>;
}
