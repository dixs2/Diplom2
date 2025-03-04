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
              <Route path={routes.signIn} element={<SingIn></SingIn>}></Route>
            </Routes>
          </MainContainer>
        </ThemeContextProvider>
      </Provider>
    </>
  );
}

export default App;
