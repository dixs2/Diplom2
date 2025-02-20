import Tabs, { Tab } from "../../shared/ui/Tabs";
import TitleSection from "../../shared/ui/Title";
import Africa from "./Africa";
import Asia from "./Asia";
import Australia from "./Australia";
import Europe from "./Europe";
import "./index.css";
import NorthAmerica from "./NorthAmerica";
import SouthAmerica from "./SouthAmerica";

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
  return (
    <section className="world-map-section">
      <div className="world-map-content">
        <TitleSection>Countries of the World</TitleSection>
        <Tabs tabs={tabs}></Tabs>
      </div>
    </section>
  );
}
