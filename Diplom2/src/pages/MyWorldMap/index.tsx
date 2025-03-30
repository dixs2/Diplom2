import { useSearchParams } from "react-router";
import Tabs, { Tab } from "../../shared/ui/Tabs";
import TitleSection from "../../shared/ui/Title";
import { useEffect, useMemo, useState } from "react";
import MyAfrica from "./MyAfrica";
import MyAsia from "./MyAsia";
import MyAustralia from "./MyAustralia";
import MyNorthAmerica from "./MyNorthAmerica";
import MyEurope from "./MyEurope";
import MySouthAmerica from "./MySouthAmerica";
import "./index.scss";
import { useGetUserQuery, User } from "../../api/endpoints/user";
import ModalNotAuth from "../../shared/ui/ModalNotAuth";
import NewCountryForm from "../../components/NewCountryForm";
import { useDispatch } from "react-redux";
import { showAddModal } from "../../store/addModal";

export function getTabsMyWorldMap(user: User | undefined) {
  if (user) {
    const result: Tab[] = [
      {
        label: "Africa",
        component: <MyAfrica myAfrica={user.myAfrica}></MyAfrica>,
      },
      {
        label: "Asia",
        component: <MyAsia myAsia={user.myAsia}></MyAsia>,
      },
      {
        label: "Australia",
        component: <MyAustralia myAustralia={user.myAustralia}></MyAustralia>,
      },
      {
        label: "Europe",
        component: <MyEurope myEurope={user.myEurope}></MyEurope>,
      },
      {
        label: "North America",
        component: (
          <MyNorthAmerica myNorthAmerica={user.myNorthAmerica}></MyNorthAmerica>
        ),
      },
      {
        label: "South America",
        component: (
          <MySouthAmerica mySouthAmerica={user.mySouthAmerica}></MySouthAmerica>
        ),
      },
    ];
    return result;
  } else {
    return [];
  }
}

export default function MyWorldMap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isError } = useGetUserQuery("");
  const [tabsMyWorldMap, setTabsMyWorldMap] = useState<Tab[]>([]);
  const dispath = useDispatch();

  useEffect(() => {
    if (data) {
      setTabsMyWorldMap(getTabsMyWorldMap(data[0]));
    }
  }, [data]);

  const onChangeTab = (index: number) => {
    setSearchParams({
      continent: tabsMyWorldMap[index].label,
    });
  };

  const initialActiveTab = useMemo(() => {
    return tabsMyWorldMap.findIndex(
      (tabMyWorldMap) => tabMyWorldMap.label === searchParams.get("continent")
    );
  }, []);

  const render = () => {
    if (isError) {
      return <ModalNotAuth></ModalNotAuth>;
    }
    if (data) {
      return (
        <section className="my-world-map-section">
          <div className="my-world-map-content">
            <TitleSection>The continent i visited</TitleSection>
            <button
              className="my-world-map-open-modal"
              onClick={() => {
                dispath(showAddModal());
              }}
            >
              + Add a New Continent
            </button>
            <NewCountryForm account={data[0]}></NewCountryForm>
            <Tabs
              tabs={tabsMyWorldMap}
              onChangeTab={onChangeTab}
              activeIndexTab={initialActiveTab ?? 0}
            ></Tabs>
          </div>
        </section>
      );
    }
  };

  return <>{render()}</>;
}
