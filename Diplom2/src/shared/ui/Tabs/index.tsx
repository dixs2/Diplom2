import { ReactNode, useEffect, useState } from "react";
import "./index.css";

export interface Tab {
  label: string;
  component: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  onChangeTab?: (index: number) => void;
  activeIndexTab?: number;
}

export default function Tabs({ tabs, onChangeTab, activeIndexTab }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<Number>(
    activeIndexTab ?? Number(localStorage.getItem("activeIndex"))
  );

  useEffect(() => {
    localStorage.setItem("activeIndex", `${activeIndex}`);
  }, [activeIndex]);

  const handleClickOnLabel = (index: number) => {
    setActiveIndex(index);
    onChangeTab?.(index);
  };

  return (
    <div className="tabs">
      <div className="tabs-button-wrap">
        {tabs.map((tab, index) => {
          const classActive = activeIndex === index ? "active" : "";

          return (
            <button
              key={index}
              onClick={() => handleClickOnLabel(index)}
              className={`tabs-button ${classActive}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="tab-content">
        {tabs.map((tab, index) => {
          if (activeIndex === index) {
            return tab.component;
          }
          return null;
        })}
      </div>
    </div>
  );
}
