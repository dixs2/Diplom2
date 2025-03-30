import { Link } from "react-router";
import { User } from "../../../api/endpoints/user";
import "./index.scss";
import routes from "../../../routes";

interface UserProps {
  user: User;
}

export default function UserCard({ user }: UserProps) {
  return (
    <Link to={routes.user(user.name)}>
      <div className="user-card">
        <div className="user-card-photo">
          <img src={user.photo} alt="" />
        </div>
        <span className="user-card-name">{user.name}</span>
      </div>
    </Link>
  );
}
