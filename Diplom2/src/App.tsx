import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ThemeContextProvider from "./context/Theme.Provider";
import MainPage from "./pages/MainPage";
import WorldMap from "./pages/WorldMap";
import routes from "./routes";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header></Header>
        <MainContainer>
          <Routes>
            <Route path={routes.main} element={<MainPage></MainPage>}></Route>
            <Route
              path={routes.worldMap}
              element={<WorldMap></WorldMap>}
            ></Route>
          </Routes>
        </MainContainer>
      </ThemeContextProvider>
    </>
  );
}

export default App;
