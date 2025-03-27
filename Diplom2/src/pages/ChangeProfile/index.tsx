import { useGetUserQuery } from "../../api/endpoints/user";
import ModalNotAuth from "../../shared/ui/ModalNotAuth";
import Title from "../../shared/ui/Title";
import MyProfile from "../Profile/MyProfile";
import ChangeProfileForm from "./ChangeProfileForm";

export default function ChangeProfile() {
  const { isError, data } = useGetUserQuery("");

  const renderProfile = () => {
    if (isError) {
      return <ModalNotAuth></ModalNotAuth>;
    }

    if (data) {
      return (
        <section className="profile">
          <Title>Profile</Title>
          <ChangeProfileForm user={data[0]}></ChangeProfileForm>
        </section>
      );
    }
  };

  return <>{renderProfile()}</>;
}
