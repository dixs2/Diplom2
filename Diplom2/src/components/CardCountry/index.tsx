import { NavLink } from "react-router";
import "./index.scss";
import routes from "../../routes";
import { DataCountry } from "./type";

interface CardCountryProps {
  country: DataCountry;
}

export default function CardCountry({ country }: CardCountryProps) {
  return (
    <NavLink to={routes.country(country.continent, country.title)}>
      <div className="country-card">
        <div className="country-card-content">
          <h3 className="country-card-title">{country.title}</h3>
          <div className="country-card-photo-wrap">
            <img src={country.photo} alt="#" className="country-card-photo" />
          </div>
        </div>
      </div>
    </NavLink>
  );
}
