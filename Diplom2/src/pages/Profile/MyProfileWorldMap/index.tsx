import { useSearchParams } from "react-router";
import { useGetUserQuery } from "../../../api/endpoints/user";
import { useMemo } from "react";
import Tabs from "../../../shared/ui/Tabs";
import { tabsMyWorldMap } from "../../MyWorldMap";
import "./index.css";

export default function MyProfileWorldMap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError } = useGetUserQuery("");

  const onChangeTab = (index: number) => {
    setSearchParams({ continent: tabsMyWorldMap[index].label });
  };
  const initialActiveTab = useMemo(() => {
    return tabsMyWorldMap.findIndex(
      (tabMyWorldMap) => tabMyWorldMap.label === searchParams.get("continent")
    );
  }, []);
  const render = () => {
    if (isError) {
      return isError;
    }
    if (data) {
      return (
        <div className="profile-world-map">
          <Tabs
            tabs={tabsMyWorldMap}
            onChangeTab={onChangeTab}
            activeIndexTab={initialActiveTab ?? 0}
          ></Tabs>
        </div>
      );
    }
  };
  return <>{render()}</>;
}
