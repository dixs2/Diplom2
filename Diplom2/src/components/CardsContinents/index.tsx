import { dataContinent } from "../../mock/type";
import CardContinent from "../CardContinent";
import "./index.scss";

export function splitByColum(continents: dataContinent[], colum: number) {
  const newContinents: dataContinent[][] = [];

  for (let i = 1; i <= colum; i++) {
    newContinents.push([]);
  }

  continents.forEach((continent, index) => {
    newContinents[index % colum].push(continent);
  });

  return newContinents;
}

interface CardsContinentsProps {
  continents: dataContinent[];
  colum: number;
}

export default function CardsContinentsColum({
  continents,
  colum,
}: CardsContinentsProps) {
  const newViewContinents = splitByColum(continents, colum);

  return (
    <div className="card-continent-colum-wrap">
      {newViewContinents.map((oldViewContinents) => {
        return (
          <div className="card-continent-colum">
            {oldViewContinents.map((continent) => {
              return (
                <CardContinent
                  continent={continent}
                  key={continent.title}
                ></CardContinent>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
