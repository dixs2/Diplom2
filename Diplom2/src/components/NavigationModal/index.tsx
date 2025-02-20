import { NavLink } from "react-router";
import routes from "../../routes";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { hideNavModal } from "../../store/actions";

export default function NavigationModal() {
  const isOpen = useSelector((state: State) => state.isOpenNavModal);
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
      </nav>
    </div>
  );
}
