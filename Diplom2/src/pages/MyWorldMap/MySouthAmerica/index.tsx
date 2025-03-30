import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MySouthAmericaProps {
  mySouthAmerica: DataCountry[];
}

export default function MySouthAmerica({
  mySouthAmerica,
}: MySouthAmericaProps) {
  const renderPosts = () => {
    if (mySouthAmerica.length === 0) {
      return (
        <Box textAlign={"center"}>"You have not been to this continent"</Box>
      );
    }
    return <CardsCountrys countries={mySouthAmerica} />;
  };

  return <>{renderPosts()}</>;
}
