import { NavLink } from "react-router";
import { dataContinent } from "../../mock/type";
import "./index.scss";
import routes from "../../routes";

interface CardContinentProps {
  continent: dataContinent;
}

export default function CardContinent({ continent }: CardContinentProps) {
  return (
    <NavLink to={routes.continent(continent.title)}>
      <div className="continent-card">
        <div className="continent-card-content">
          <h3 className="continent-card-title">{continent.title}</h3>
          <div className="continent-card-photo-wrap">
            <img
              src={continent.photo}
              alt="#"
              className="continent-card-photo"
            />
          </div>
        </div>
      </div>
    </NavLink>
  );
}
