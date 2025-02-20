import BurgerNav from "../../shared/ui/BurgerNav";
import ButtomTheme from "../ButtonTheme";
import NavigationModal from "../NavigationModal";
import UserProfile from "../UserProfile";
import "./index.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header-content">
        <div className="main-header-content-left">
          <BurgerNav></BurgerNav>
          <NavigationModal></NavigationModal>
        </div>
        <div className="main-header-content-right">
          <ButtomTheme></ButtomTheme>
          <UserProfile userName={"Seva Tupeka"}></UserProfile>
        </div>
      </div>
    </header>
  );
}
