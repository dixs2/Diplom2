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
    if (data) {
      if (data[0].myAfrica.length === 0) {
        return (
          <Box textAlign={"center"}>"You have not been to this continent"</Box>
        );
      }
      return <CardsCountrys countries={data[0].myAfrica} />;
    }
  };

  return <>{renderPosts()}</>;
}
