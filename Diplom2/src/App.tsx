import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ThemeContextProvider from "./context/Theme.Provider";
import WorldMap from "./pages/WorldMap";
import routes from "./routes";
import SingIn from "./pages/SignIn";
import SelectedContinent from "./pages/SelectedContinent";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home";

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
                  path=":continentId"
                  element={<SelectedContinent></SelectedContinent>}
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
