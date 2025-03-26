import { User } from "../../../api/endpoints/user";
import "./index.scss";

interface UserProps {
  user: User;
}

export default function UserCard({ user }: UserProps) {
  return (
    <div className="user-card">
      <div className="user-card-photo">
        <img src={user.photo} alt="" />
      </div>
      <div className="user-card-name">{user.name}</div>
    </div>
  );
}
