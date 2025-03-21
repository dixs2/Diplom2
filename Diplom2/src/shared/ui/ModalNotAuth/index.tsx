import { Link, useNavigate } from "react-router";
import routes from "../../../routes";
import "./index.scss";

export default function ModalNotAuth() {
  const navigate = useNavigate();

  return (
    <div className="modal-not-auth">
      <div className="modal-not-auth-conent">
        <button
          className="modal-not-auth-close"
          onClick={() => navigate(routes.home)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="modal-not-auth-title">
          You aren't logged in to your account
        </h2>
        <Link className="modal-not-auth-link" to={routes.signIn}>
          Go to the Sing In page
        </Link>
      </div>
    </div>
  );
}
2;
