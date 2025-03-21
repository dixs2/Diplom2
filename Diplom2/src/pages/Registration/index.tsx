import Title from "../../shared/ui/Title";
import "./index.scss";
import RegistrationForm from "./RegistrationForm";

export default function Registration() {
  return (
    <section className="registration">
      <Title>Registration</Title>
      <RegistrationForm></RegistrationForm>
    </section>
  );
}
