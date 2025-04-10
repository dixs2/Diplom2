import { DataCountry } from "../CardCountry/type";
import "./index.scss";

interface SelectedContinentCardProps {
  country: DataCountry | undefined;
}

export default function SelectedContinentCard({
  country,
}: SelectedContinentCardProps) {
  return (
    <section className="selected-continent">
      <div className="selected-continent-card">
        <h2 className="selected-continent-card-title">{country?.title}</h2>
        <div className="selected-continent-card-country">
          <div className="selected-continent-card-img">
            <img src={country?.photo} alt="#" />
          </div>
          <div className="selected-continent-card-text">
            <p>{country?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
