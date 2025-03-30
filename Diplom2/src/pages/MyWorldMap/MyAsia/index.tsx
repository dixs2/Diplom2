import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyAsiaProps {
  myAsia: DataCountry[];
}

export default function MyAfrica({ myAsia }: MyAsiaProps) {
  const renderPosts = () => {
    if (myAsia.length === 0) {
      return (
        <Box textAlign={"center"}>"You have not been to this continent"</Box>
      );
    }
    return <CardsCountrys countries={myAsia} />;
  };

  return <>{renderPosts()}</>;
}
