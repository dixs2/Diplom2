import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyAustraliaProps {
  myAustralia: DataCountry[];
}

export default function MyAustralia({ myAustralia }: MyAustraliaProps) {
  const renderPosts = () => {
    if (myAustralia.length === 0) {
      return (
        <Box textAlign={"center"}>"You have not been to this continent"</Box>
      );
    }
    return <CardsCountrys countries={myAustralia} />;
  };

  return <>{renderPosts()}</>;
}
