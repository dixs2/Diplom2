import "./index.scss";
import { User } from "../../api/endpoints/user";

interface MyProfileProps {
  user: User | undefined;
}

export default function UserProfileCard({ user }: MyProfileProps) {
  return (
    <div className="user-profile-card-content">
      <div className="user-profile-card-content-left">
        <div className="user-profile-card-img">
          <img src={user?.photo} alt="" />
        </div>
        <span className="user-profile-card-name">Name: {user?.name}</span>
        <span className="user-profile-card-isClosed">
          {user?.isClosed ? "Close Account" : "Open Account"}
        </span>
      </div>
      <div className="user-profile-card-content-right">
        <div className="user-profile-card-description">
          <p>Description: {user?.description}</p>
        </div>
      </div>
    </div>
  );
}
