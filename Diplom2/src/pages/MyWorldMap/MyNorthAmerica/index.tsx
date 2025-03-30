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
        <Box textAlign={"center"}>"You have not been to this continent"</Box>
      );
    }
    return <CardsCountrys countries={myNorthAmerica} />;
  };

  return <>{renderPosts()}</>;
}
