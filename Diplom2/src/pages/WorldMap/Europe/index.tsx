import { dataEurope } from "../../../mock/dataEurope";
import CardsContinentsColum from "../../../components/CardsContinents";

export default function Europe() {
  return (
    <CardsContinentsColum
      continents={dataEurope}
      colum={4}
    ></CardsContinentsColum>
  );
}
