import { NavLink } from "react-router";
import "./index.scss";
import routes from "../../routes";
import { DataCountry } from "./type";

interface CardCountryProps {
  country: DataCountry;
  userName?: string;
  variant?: "my" | "all" | "user";
}

export default function CardCountry({
  country,
  variant = "all",
  userName,
}: CardCountryProps) {
  if (variant === "my") {
    return (
      <NavLink to={routes.myCountry(country.continent, country.title)}>
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
  } else if (variant === "all") {
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
  } else {
    return (
      <NavLink
        to={routes.userCountry(
          userName || "",
          country.continent,
          country.title
        )}
      >
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
}
