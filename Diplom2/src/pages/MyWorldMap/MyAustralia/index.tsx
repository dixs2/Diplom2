import CardsCountrys from "../../../components/CardsCountrys";
import { DataCountry } from "../../../components/CardCountry/type";
import { Box } from "@mui/material";

interface MyAustraliaProps {
  myAustralia: DataCountry[];
  userName?: string;
  variant: "my" | "all" | "user";
}

export default function MyAustralia({
  myAustralia,
  userName,
  variant,
}: MyAustraliaProps) {
  const renderPosts = () => {
    if (myAustralia.length === 0) {
      return (
        <Box textAlign={"center"} fontSize={"18px"} fontWeight={"600"}>
          "This content is still empty"
        </Box>
      );
    }
    return (
      <CardsCountrys
        countries={myAustralia}
        variant={variant}
        userName={userName}
      />
    );
  };

  return <>{renderPosts()}</>;
}
