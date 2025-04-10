import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ThemeContextProvider from "./context/Theme.Provider";
import WorldMap from "./pages/WorldMap";
import routes from "./routes";
import SingIn from "./pages/SignIn";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./store";
import SelectedCountry from "./pages/SelectedContinent";
import MyWorldMap from "./pages/MyWorldMap";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import AllUsers from "./pages/AllUsers";
import ChangeProfile from "./pages/ChangeProfile";
import SelectedUser from "./pages/SelectedUser";
import SelectedMyCountry from "./pages/SelectedMyContinent";
import SelectedUserCountry from "./pages/SelectedUserContinent";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeContextProvider>
          <Header></Header>
          <MainContainer>
            <Routes>
              <Route path={routes.home} element={<Home></Home>}></Route>
              <Route path={routes.worldMap}>
                <Route index element={<WorldMap></WorldMap>} />
                <Route
                  path=":continentTitle/:countryTitle"
                  element={<SelectedCountry></SelectedCountry>}
                ></Route>
              </Route>
              <Route path={routes.myWorldMap}>
                <Route index element={<MyWorldMap></MyWorldMap>} />
                <Route
                  path=":myContinentTitle/:myCountryTitle"
                  element={<SelectedMyCountry></SelectedMyCountry>}
                ></Route>
              </Route>
              <Route path={routes.signIn} element={<SingIn></SingIn>}></Route>
              <Route
                path={routes.registration}
                element={<Registration></Registration>}
              ></Route>
              <Route path={routes.profile}>
                <Route index element={<Profile></Profile>}></Route>
                <Route
                  path={routes.changeProfile}
                  element={<ChangeProfile></ChangeProfile>}
                ></Route>
              </Route>
              <Route path={routes.allUsers}>
                <Route index element={<AllUsers></AllUsers>}></Route>
                <Route
                  path=":userName"
                  element={<SelectedUser></SelectedUser>}
                ></Route>
                <Route
                  path=":userName/:userContinentTitle/:userCountryTitle"
                  element={<SelectedUserCountry></SelectedUserCountry>}
                ></Route>
              </Route>
            </Routes>
          </MainContainer>
        </ThemeContextProvider>
      </Provider>
    </>
  );
}

export default App;
