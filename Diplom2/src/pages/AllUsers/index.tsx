import Title from "../../shared/ui/Title";
import UsersList from "./UsersList";

export default function AllUsers() {
  return (
    <section className="allusers">
      <Title>All Users</Title>
      <UsersList></UsersList>
    </section>
  );
}
