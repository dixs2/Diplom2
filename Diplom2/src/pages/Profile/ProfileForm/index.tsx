import { useEffect, useState } from "react";
import {
  useChangeUserMutation,
  useGetUserQuery,
  User,
} from "../../../api/endpoints/user";
import "./index.scss";
import { useNavigate } from "react-router";
import routes from "../../../routes";

export default function ProfileForm() {
  const { data } = useGetUserQuery("");
  const navigate = useNavigate();
  const [changeUser] = useChangeUserMutation();
  const [formValue, setFormValue] = useState<User | undefined>();

  useEffect(() => {
    if (data && data[0]) {
      setFormValue(data[0]);
    }
  }, [data]);

  const handelChange =
    (key: keyof User) => (event: { target: { value: any } }) => {
      console.log(event);
      setFormValue((prev: any) => ({ ...prev, [key]: event?.target?.value }));
    };

  return (
    <form name="profileForm" className="profile-form">
      <div className="profile-form-content">
        <div className="profile-form-header">
          {/* <div className="profile-form-photo">
            <img src={user?.photo} alt="" />
          </div> */}
          <div className="profile-form-data">
            <div className="profile-form-closed">
              <label className="profile-form-closed-label">
                {formValue?.isClosed !== true
                  ? "Close account"
                  : "Open account"}
                <input
                  type="checkbox"
                  className="profile-form-closed-checkbox"
                  onChange={(event) => {
                    setFormValue((prev: any) => ({
                      ...prev,
                      isClosed: event.target.checked,
                    }));
                  }}
                  checked={formValue?.isClosed}
                  id="closedAccount"
                />
              </label>
            </div>
            <div className="profile-form-name">
              <label className="profile-form-label">Name</label>
              <input
                type="text"
                name="name"
                className="profile-form-input"
                onChange={handelChange("name")}
                value={formValue?.name}
              />
            </div>
            <div className="profile-form-email">
              <label className="profile-form-label">Email</label>
              <input
                type="text"
                name="email"
                className="profile-form-input"
                onChange={handelChange("email")}
                value={formValue?.email}
              />
            </div>
          </div>
        </div>
        <div className="profile-form-footer">
          <div className="profile-form-description">
            <label className="profile-form-label">Description</label>
            <textarea
              name="description"
              id="description"
              className="profile-form-textarea"
              onChange={handelChange("description")}
              value={formValue?.description}
            ></textarea>
          </div>
          <div className="profile-form-button-wrap">
            <button
              className="profile-form-button-close"
              type="button"
              onClick={() => {
                navigate(routes.home);
              }}
            >
              Close
            </button>
            <button
              className="profile-form-button-submit"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                formValue !== undefined ? changeUser(formValue) : undefined;
              }}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
