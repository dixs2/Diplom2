import { useGetUserQuery } from "../../api/endpoints/user";
import ModalNotAuth from "../../shared/ui/ModalNotAuth";
import Title from "../../shared/ui/Title";
import MyProfile from "./MyProfile";
import ProfileForm from "../ChangeProfile/ChangeProfileForm";
import "./index.css";
import MyProfileWorldMap from "./MyProfileWorldMap";

export default function Profile() {
  const { isError, data } = useGetUserQuery("");

  const renderProfile = () => {
    if (isError) {
      return <ModalNotAuth></ModalNotAuth>;
    }

    if (data) {
      return (
        <section className="profile">
          <Title>Profile</Title>
          <MyProfile user={data[0]}></MyProfile>
          <MyProfileWorldMap></MyProfileWorldMap>
        </section>
      );
    }
  };

  return <>{renderProfile()}</>;
}
