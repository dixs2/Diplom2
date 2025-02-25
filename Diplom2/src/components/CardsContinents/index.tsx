import { useEffect, useRef, useState } from "react";
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
  countries: dataContinent[];
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

export default function CardsContinentsColum({
  countries,
}: CardsContinentsProps) {
  const countRender = useRef(0);
  const [column, setColumn] = useState(getCountColumn());

  const newViewContinents = splitByColum(countries, column);

  useEffect(() => {
    countRender.current += 1;
    console.log("countRender", countRender.current);
  });

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
