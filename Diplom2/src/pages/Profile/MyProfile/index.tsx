import { Link } from "react-router";
import { User } from "../../../api/endpoints/user";
import "./index.scss";
import routes from "../../../routes";

interface MyProfileProps {
  user: User;
}

export default function MyProfile({ user }: MyProfileProps) {
  return (
    <div className="my-profile-card">
      <Link to={routes.changeProfile} className="my-profile-card-button">
        Change Profile
      </Link>
      <div className="my-profile-card-content">
        <div className="my-profile-card-content-left">
          <div className="my-profile-card-img">
            <img src={user.photo} alt="" />
          </div>
          <span className="my-profile-card-name">Name: {user.name}</span>
          <span className="my-profile-card-isClosed">
            {user.isClosed ? "Close Account" : "Open Account"}
          </span>
        </div>
        <div className="my-profile-card-content-right">
          <div className="my-profile-card-description">
            <p>Description: {user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
