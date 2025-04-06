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
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return <CardsCountrys countries={myAsia} />;
  };

  return <>{renderPosts()}</>;
}
