import { useState } from "react";
import "./index.scss";
import { useCreateUserMutation, User } from "../../../api/endpoints/user";
import { useNavigate } from "react-router";
import routes from "../../../routes";

export interface NewUser
  extends Omit<
    User,
    | "id"
    | "isClosed"
    | "photo"
    | "myAfrica"
    | "myAsia"
    | "myAustralia"
    | "myEurope"
    | "myNorthAmerica"
    | "mySouthAmerica"
  > {}

export default function RegistrationForm() {
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState<NewUser>({
    email: "",
    password: "",
    name: "",
    description: "",
  });
  const handelChange =
    (key: keyof NewUser) => (event: { target: { value: any } }) => {
      setFormValue((prev) => ({ ...prev, [key]: event?.target?.value }));
    };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await createUser({ ...formValue });
    navigate(routes.signIn);
  };

  return (
    <form className="registration-form">
      <div className="registration-form-content">
        <div className="registration-form-name">
          <label className="registration-form-label">Name</label>
          <input
            type="text"
            name="name"
            className="registration-form-input"
            onChange={handelChange("name")}
            required
          />
        </div>
        <div className="registration-form-email">
          <label className="registration-form-label">Email</label>
          <input
            type="text"
            name="email"
            className="registration-form-input"
            onChange={handelChange("email")}
            required
          />
        </div>
        <div className="registration-form-password">
          <label className="registration-form-label">Password</label>
          <input
            type="password"
            name="password"
            className="registration-form-input"
            onChange={handelChange("password")}
            required
          />
        </div>
        <button
          className="registration-form-button"
          type="submit"
          onClick={handleSubmit}
        >
          Registration
        </button>
      </div>
    </form>
  );
}
