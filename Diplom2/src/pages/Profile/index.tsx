import { useGetUserQuery } from "../../api/endpoints/user";
import ModalNotAuth from "../../shared/ui/ModalNotAuth";
import Title from "../../shared/ui/Title";
import ProfileForm from "./ProfileForm";
import "./index.css";

export default function Profile() {
  const { isError } = useGetUserQuery("");

  if (isError) {
    return <ModalNotAuth></ModalNotAuth>;
  }

  return (
    <section className="profile">
      <Title>Profile</Title>
      <ProfileForm></ProfileForm>
    </section>
  );
}
