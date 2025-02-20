import Title from "../../shared/ui/Title";
import "./index.scss";
import SingInForm from "./SignInForm";

export default function SingIn() {
  return (
    <section className="sing-in">
      <Title>Sing In</Title>
      <SingInForm></SingInForm>
    </section>
  );
}
