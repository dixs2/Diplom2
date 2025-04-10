import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyEuropeProps {
  myEurope: DataCountry[];
  userName?: string;
  variant: "my" | "all" | "user";
}

export default function MyEurope({
  myEurope,
  userName,
  variant,
}: MyEuropeProps) {
  const renderPosts = () => {
    if (myEurope.length === 0) {
      return (
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return (
      <CardsCountrys
        countries={myEurope}
        variant={variant}
        userName={userName}
      />
    );
  };

  return <>{renderPosts()}</>;
}
