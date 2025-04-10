import { useSearchParams } from "react-router";
import "./index.scss";
import { useGetUserQuery, User } from "../../api/endpoints/user";
import { getTabsMyWorldMap } from "../../pages/MyWorldMap";
import { useMemo } from "react";
import Tabs from "../../shared/ui/Tabs";

interface UserProfileWorldMapProps {
  user: User | undefined;
}

export default function UserProfileWorldMap({
  user,
}: UserProfileWorldMapProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabsMyWorldMap = getTabsMyWorldMap(user, "user");

  const onChangeTab = (index: number) => {
    setSearchParams({ continent: tabsMyWorldMap[index].label });
  };
  const initialActiveTab = useMemo(() => {
    return tabsMyWorldMap.findIndex(
      (tabMyWorldMap) => tabMyWorldMap.label === searchParams.get("continent")
    );
  }, []);

  return (
    <div className="user-profile-world-map">
      <Tabs
        tabs={tabsMyWorldMap}
        onChangeTab={onChangeTab}
        activeIndexTab={initialActiveTab ?? 0}
      ></Tabs>
    </div>
  );
}
