import { Box } from "@mui/material";
import { useGetUserQuery } from "../../../api/endpoints/user";
import CardsCountrys from "../../../components/CardsCountrys";

export default function MySouthAmerica() {
  const { data, isError, status } = useGetUserQuery("");
  const renderPosts = () => {
    if (isError) {
      return isError;
    }
    if (data) {
      if (data[0].mySouthAmerica.length === 0) {
        return (
          <Box textAlign={"center"}>"You have not been to this continent"</Box>
        );
      }
      return <CardsCountrys countries={data[0].mySouthAmerica} />;
    }
  };

  return <>{renderPosts()}</>;
}
