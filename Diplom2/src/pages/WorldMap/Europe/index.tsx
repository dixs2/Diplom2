import CardsContinentsColum from "../../../components/CardsContinents";
import { dataEurope } from "../../../mock/dataEurope";

export default function Europe() {
  return (
    <CardsContinentsColum
      continents={dataEurope}
      colum={4}
    ></CardsContinentsColum>
  );
}
