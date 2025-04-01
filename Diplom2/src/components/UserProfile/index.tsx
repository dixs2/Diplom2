import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../api/endpoints/user";
import "./index.scss";
import { Link } from "react-router";
import routes from "../../routes";

function userNameShort(userName: string): string {
  if (userName.length !== 0) {
    const usernameArray = userName.split(" ");

    if (usernameArray.length === 1) {
      return usernameArray[0][0].toUpperCase();
    } else {
      return (
        usernameArray[0][0].toUpperCase() + usernameArray[1][0].toUpperCase()
      );
    }
  }

  return "";
}

export default function UserProfile() {
  const { data, isError } = useGetUserQuery("");
  const [userName, setUserName] = useState("");
  const shorName = userNameShort(userName);

  useEffect(() => {
    if (data) {
      if (data.length !== 0) {
        setUserName(data[0].name);
      }
    }
  }, [data]);

  if (isError) {
    return (
      <>
        <Link to={routes.signIn} className="header-link-sign-in">
          <i className="fa-solid fa-circle-user"></i>
        </Link>
      </>
    );
  }

  return userName.length ? (
    <div className="user-profile-wrap">
      <span className="user-name--short">{shorName}</span>
      <span className="user-name">{userName}</span>
    </div>
  ) : (
    <Link to={routes.signIn} className="header-link-sign-in">
      <i className="fa-solid fa-circle-user"></i>
    </Link>
  );
}
