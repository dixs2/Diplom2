import { NavLink } from "react-router";
import routes from "../../routes";

export default function NavigationModal() {
  return (
    <div className="main-modal">
      <nav className="main-modal-navigation">
        <NavLink to={routes.main} end>
          Home
        </NavLink>
        <NavLink to={routes.worldMap} end>
          World Map
        </NavLink>
      </nav>
    </div>
  );
}
