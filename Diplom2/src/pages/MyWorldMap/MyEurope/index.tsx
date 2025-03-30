import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyEuropeProps {
  myEurope: DataCountry[];
}

export default function MyEurope({ myEurope }: MyEuropeProps) {
  const renderPosts = () => {
    if (myEurope.length === 0) {
      return (
        <Box textAlign={"center"}>"You have not been to this continent"</Box>
      );
    }
    return <CardsCountrys countries={myEurope} />;
  };

  return <>{renderPosts()}</>;
}
