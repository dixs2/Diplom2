import { useSearchParams } from "react-router";
import Tabs, { Tab } from "../../shared/ui/Tabs";
import TitleSection from "../../shared/ui/Title";
import { useMemo } from "react";
import MyAfrica from "./MyAfrica";
import MyAsia from "./MyAsia";
import MyAustralia from "./MyAustralia";
import MyNorthAmerica from "./MyNorthAmerica";
import MyEurope from "./MyEurope";
import MySouthAmerica from "./MySouthAmerica";
import "./index.scss";
import { useGetUserQuery } from "../../api/endpoints/user";

const tabsMyWorldMap: Tab[] = [
  {
    label: "Africa",
    component: <MyAfrica></MyAfrica>,
  },
  {
    label: "Asia",
    component: <MyAsia></MyAsia>,
  },
  {
    label: "Australia",
    component: <MyAustralia></MyAustralia>,
  },
  {
    label: "Europe",
    component: <MyEurope></MyEurope>,
  },
  {
    label: "North America",
    component: <MyNorthAmerica></MyNorthAmerica>,
  },
  {
    label: "South America",
    component: <MySouthAmerica></MySouthAmerica>,
  },
];

export default function MyWorldMap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isError } = useGetUserQuery("");

  if (isError) {
  }
  const onChangeTab = (index: number) => {
    setSearchParams({ continent: tabsMyWorldMap[index].label });
  };

  const initialActiveTab = useMemo(() => {
    return tabsMyWorldMap.findIndex(
      (tabMyWorldMap) => tabMyWorldMap.label === searchParams.get("continent")
    );
  }, []);

  return (
    <section className="my-world-map-section">
      <div className="my-world-map-content">
        <TitleSection>The continent i visited</TitleSection>
        <Tabs
          tabs={tabsMyWorldMap}
          onChangeTab={onChangeTab}
          activeIndexTab={initialActiveTab ?? 0}
        ></Tabs>
      </div>
    </section>
  );
}
