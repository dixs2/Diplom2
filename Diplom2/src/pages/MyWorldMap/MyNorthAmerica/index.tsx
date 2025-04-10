import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyNorthAmericaProps {
  myNorthAmerica: DataCountry[];
  userName?: string;
  variant: "my" | "all" | "user";
}

export default function MyNorthAmerica({
  userName,
  myNorthAmerica,
  variant,
}: MyNorthAmericaProps) {
  const renderPosts = () => {
    if (myNorthAmerica.length === 0) {
      return (
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return (
      <CardsCountrys
        countries={myNorthAmerica}
        variant={variant}
        userName={userName}
      />
    );
  };

  return <>{renderPosts()}</>;
}
