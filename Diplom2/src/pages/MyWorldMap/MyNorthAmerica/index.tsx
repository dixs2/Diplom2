import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyNorthAmericaProps {
  myNorthAmerica: DataCountry[];
}

export default function MyNorthAmerica({
  myNorthAmerica,
}: MyNorthAmericaProps) {
  const renderPosts = () => {
    if (myNorthAmerica.length === 0) {
      return (
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return <CardsCountrys countries={myNorthAmerica} />;
  };

  return <>{renderPosts()}</>;
}
