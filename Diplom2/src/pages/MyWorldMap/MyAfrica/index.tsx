import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyAfricaProps {
  myAfrica: DataCountry[];
}

export default function MyAfrica({ myAfrica }: MyAfricaProps) {
  const renderPosts = () => {
    if (myAfrica.length === 0) {
      return (
        <Box textAlign={"center"}>"You have not been to this continent"</Box>
      );
    }
    return <CardsCountrys countries={myAfrica} />;
  };

  return <>{renderPosts()}</>;
}
