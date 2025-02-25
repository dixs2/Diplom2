import { useSearchParams } from "react-router";
import Tabs, { Tab } from "../../shared/ui/Tabs";
import TitleSection from "../../shared/ui/Title";
import Africa from "./Africa";
import Asia from "./Asia";
import Australia from "./Australia";
import Europe from "./Europe";
import "./index.css";
import NorthAmerica from "./NorthAmerica";
import SouthAmerica from "./SouthAmerica";
import { useMemo } from "react";

const tabs: Tab[] = [
  {
    label: "Africa",
    component: <Africa></Africa>,
  },
  {
    label: "Asia",
    component: <Asia></Asia>,
  },
  {
    label: "Australia",
    component: <Australia></Australia>,
  },
  {
    label: "Europe",
    component: <Europe></Europe>,
  },
  {
    label: "North America",
    component: <NorthAmerica></NorthAmerica>,
  },
  {
    label: "South America",
    component: <SouthAmerica></SouthAmerica>,
  },
];

export default function WorldMap() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeTab = (index: number) => {
    setSearchParams({ continent: tabs[index].label });
  };

  const initialActiveTab = useMemo(() => {
    return tabs.findIndex((tab) => tab.label === searchParams.get("continent"));
  }, []);

  return (
    <section className="world-map-section">
      <div className="world-map-content">
        <TitleSection>Countries of the World</TitleSection>
        <Tabs
          tabs={tabs}
          onChangeTab={onChangeTab}
          activeIndexTab={initialActiveTab}
        ></Tabs>
      </div>
    </section>
  );
}
