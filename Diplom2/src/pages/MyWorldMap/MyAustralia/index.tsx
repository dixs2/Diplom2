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
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return <CardsCountrys countries={myAustralia} />;
  };

  return <>{renderPosts()}</>;
}
