import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyAfricaProps {
  myAfrica: DataCountry[];
  userName?: string;
  variant: "my" | "all" | "user";
}

export default function MyAfrica({
  myAfrica,
  userName,
  variant,
}: MyAfricaProps) {
  const renderPosts = () => {
    if (myAfrica.length === 0) {
      return (
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return (
      <CardsCountrys
        countries={myAfrica}
        variant={variant}
        userName={userName}
      />
    );
  };

  return <>{renderPosts()}</>;
}
