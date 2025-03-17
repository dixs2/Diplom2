import { NavLink } from "react-router";
import routes from "../../routes";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useSelectShowNavModal } from "../../store/selectors";
import { hideNavModal } from "../../store/navModal";

export default function NavigationModal() {
  const isOpen = useSelectShowNavModal();
  const dispatch = useDispatch();
  return (
    <div
      className={isOpen ? "modal-navigation active" : "modal-navigation"}
      onClick={() => dispatch(hideNavModal())}
    >
      <nav className="modal-navigation-content">
        <NavLink to={routes.home} end className="modal-navigation-link">
          Home
        </NavLink>
        <NavLink to={routes.worldMap} end className="modal-navigation-link">
          World Map
        </NavLink>
        <NavLink to={routes.myWorldMap} end className="modal-navigation-link">
          My World Map
        </NavLink>
      </nav>
    </div>
  );
}
