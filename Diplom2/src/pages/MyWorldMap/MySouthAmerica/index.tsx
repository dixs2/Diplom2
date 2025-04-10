import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MySouthAmericaProps {
  mySouthAmerica: DataCountry[];
  userName?: string;
  variant: "my" | "all" | "user";
}

export default function MySouthAmerica({
  mySouthAmerica,
  userName,
  variant,
}: MySouthAmericaProps) {
  const renderPosts = () => {
    if (mySouthAmerica.length === 0) {
      return (
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return (
      <CardsCountrys
        countries={mySouthAmerica}
        variant={variant}
        userName={userName}
      />
    );
  };

  return <>{renderPosts()}</>;
}
