import Burger from "../../shared/ui/MainBurger";
import ButtomTheme from "../ButtonTheme";
import UserProfile from "../UserProfile";
import "./index.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header-content">
        <div className="main-header-content-left">
          <Burger></Burger>
        </div>
        <div className="main-header-content-right">
          <ButtomTheme></ButtomTheme>
          <UserProfile userName={"Seva Tupeka"}></UserProfile>
        </div>
      </div>
    </header>
  );
}
