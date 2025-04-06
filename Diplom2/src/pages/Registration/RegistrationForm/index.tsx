import { useEffect, useState } from "react";
import "./index.scss";
import {
  useCreateUserMutation,
  useGetUserByNameQuery,
  User,
} from "../../../api/endpoints/user";
import { data, useNavigate } from "react-router";
import routes from "../../../routes";
import { Box } from "@mui/system";
import { BASE_URL } from "../../../constant";
import { set } from "react-hook-form";

export interface NewUser
  extends Omit<
    User,
    | "id"
    | "isClosed"
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
    photo:
      "https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg",
  });
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const handelChange =
    (key: keyof NewUser) => (event: { target: { value: any } }) => {
      setFormValue((prev) => ({ ...prev, [key]: event?.target?.value }));
    };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const resName = await fetch(`${BASE_URL}/users?name=${formValue.name}`);
    const usersByName: User[] = await resName.json();
    const resEmail = await fetch(`${BASE_URL}/users?email=${formValue.email}`);
    const usersByEmail: User[] = await resEmail.json();

    if (resName.ok || resEmail.ok) {
      const isAuthName = [];
      const isAuthEmail = [];
      if (resName.ok) {
        const isAuth = usersByName.find(
          (user: User) => user.name === formValue.name
        );
        if (isAuth) isAuthName.push(isAuth);

        if (isAuthName) {
          setErrorName(true);
        }
      }

      if (resEmail.ok) {
        const isAuth = usersByEmail.find(
          (user: User) => user.email === formValue.email
        );
        if (isAuth) isAuthEmail.push(isAuth);

        if (isAuthEmail) {
          setErrorEmail(true);
        }
      }
      if (!isAuthName.length && !isAuthEmail.length) {
        await createUser({ ...formValue });
        navigate(routes.signIn);
      }
    } else {
      await createUser({ ...formValue });
      navigate(routes.signIn);
    }
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
          {errorName ? <Box color={"red"}>This name is taken</Box> : ""}
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
          {errorEmail ? <Box color={"red"}>This name is taken</Box> : ""}
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
