import Title from "../../shared/ui/Title";
import UsersList from "./UsersList";
import "./index.scss";
export default function AllUsers() {
  return (
    <section className="allusers">
      <Title>All Users</Title>
      <UsersList></UsersList>
    </section>
  );
}
