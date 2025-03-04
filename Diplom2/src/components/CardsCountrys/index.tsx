import { useEffect, useRef, useState } from "react";
import { DataCountry } from "../CardCountry/type";
import CardContinent from "../CardCountry";
import "./index.scss";

export function splitByColum(continents: DataCountry[], colum: number) {
  const newContinents: DataCountry[][] = [];

  for (let i = 1; i <= colum; i++) {
    newContinents.push([]);
  }

  continents.forEach((continent, index) => {
    newContinents[index % colum].push(continent);
  });

  return newContinents;
}

interface CardsCountrysProps {
  countries: DataCountry[];
}

const getCountColumn = () => {
  const width = document.documentElement.clientWidth;

  if (width < 500) {
    return 1;
  }

  if (width < 800) {
    return 2;
  }

  if (width < 1050) {
    return 3;
  }

  return 4;
};

export default function CardsCountrys({ countries }: CardsCountrysProps) {
  const [column, setColumn] = useState(getCountColumn());

  const newViewContinents = splitByColum(countries, column);

  useEffect(() => {
    let resizeTimeout: number | undefined;

    const resize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newColumn = getCountColumn();
        console.log(newColumn);
        setColumn(newColumn);
      }, 200);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="card-continent-colum-wrap">
      {newViewContinents.map((oldViewContinents) => {
        return (
          <div className="card-continent-colum">
            {oldViewContinents.map((country) => {
              return (
                <CardContinent
                  country={country}
                  key={country.id}
                ></CardContinent>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
