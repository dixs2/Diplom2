import { useState } from "react";
import "./index.scss";
import { Link } from "react-router";
import routes from "../../../routes";

interface SingForm {
  email: string;
  password: string;
}

export default function SingInForm() {
  const [formValue, setFormValue] = useState<SingForm>({
    email: "",
    password: "",
  });
  const handelChange =
    (key: keyof SingForm) => (event: { target: { value: any } }) => {
      setFormValue((prev) => ({ ...prev, [key]: event?.target?.value }));
    };

  const handleSubmit = () => {
    localStorage.setItem("email", `"${formValue.email}"`);
    localStorage.setItem("password", `"${formValue.password}"`);
  };

  return (
    <form className="sign-in-form">
      <div className="sign-in-form-content">
        <div className="sign-in-form-email">
          <label className="sign-in-form-label">Email</label>
          <input
            type="text"
            name="email"
            className="sign-in-form-input"
            onChange={handelChange("email")}
          />
        </div>
        <div className="sign-in-form-password">
          <label className="sign-in-form-label">Password</label>
          <input
            type="password"
            name="password"
            className="sign-in-form-input"
            onChange={handelChange("password")}
          />
        </div>
        <button
          className="sign-in-form-button"
          type="submit"
          onClick={handleSubmit}
        >
          Sing In
        </button>
        <span className="sign-in-form-text">
          If you don`t have an account:{" "}
          {
            <Link to={routes.registration} className="sign-in-form-link">
              Registration
            </Link>
          }
        </span>
      </div>
    </form>
  );
}
