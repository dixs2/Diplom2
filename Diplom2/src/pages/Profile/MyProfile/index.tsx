import { Link } from "react-router";
import { User } from "../../../api/endpoints/user";
import "./index.scss";
import routes from "../../../routes";
import UserProfileCard from "../../../components/UserProfileCard";

interface MyProfileProps {
  user: User;
}

export default function MyProfile({ user }: MyProfileProps) {
  return (
    <div className="my-profile-card">
      <Link to={routes.changeProfile} className="my-profile-card-button">
        Change Profile
      </Link>
      <UserProfileCard user={user}></UserProfileCard>
    </div>
  );
}
