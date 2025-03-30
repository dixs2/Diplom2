import { useParams } from "react-router";
import UserProfileCard from "../../components/UserProfileCard";
import { useGetUserByNameQuery } from "../../api/endpoints/user";
import UserProfileWorldMap from "../../components/UserProfileWorldMap";
import "./index.scss";

export default function SelectedUser() {
  const { userName } = useParams();
  const { data, isError } = useGetUserByNameQuery(userName || "");

  const renderSelectedUser = () => {
    if (isError) {
      return isError;
    }

    if (data) {
      //дата может вурнуть массив двух и более юзеров, если их имена похожи например SEVA и seva так как нету строгой фильтрации у mock
      const user = data.find((user) => user.name === userName);
      return (
        <section className="selected-user">
          <div className="selected-user-content">
            <UserProfileCard user={user}></UserProfileCard>
            <UserProfileWorldMap user={user}></UserProfileWorldMap>
          </div>
        </section>
      );
    }
  };

  return <>{renderSelectedUser()}</>;
}
