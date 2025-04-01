import { useEffect, useState } from "react";
import { useGetUsersQuery, User } from "../../../api/endpoints/user";
import UserCard from "../UserCard";
import { getCountColumn } from "../../../components/CardsCountrys";
import "./index.scss";

export function splitByColumUser(continents: User[], colum: number) {
  const users: User[][] = [];

  for (let i = 1; i <= colum; i++) {
    users.push([]);
  }

  continents.forEach((continent, index) => {
    users[index % colum].push(continent);
  });

  return users;
}

export default function UsersList() {
  const { data, isError } = useGetUsersQuery("");
  const [column, setColumn] = useState(getCountColumn());

  const renderUsersList = () => {
    if (isError) {
      return isError;
    }
    if (data) {
      const users = splitByColumUser(data, column);

      return (
        <div className="users-cards-column-wrap">
          {users?.map((users2) => {
            return (
              <div className="users-cards-column">
                {users2.map((user) => {
                  return <UserCard user={user} key={user.id}></UserCard>;
                })}
              </div>
            );
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    let resizeTimeout: number | undefined;

    const resize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newColumn = getCountColumn();
        setColumn(newColumn);
      }, 200);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return <>{renderUsersList()}</>;
}
