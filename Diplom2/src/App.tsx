import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ThemeContextProvider from "./context/Theme.Provider";
import MainPage from "./pages/MainPage";
import WorldMap from "./pages/WorldMap";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header></Header>
        <MainContainer>
          <WorldMap></WorldMap>
        </MainContainer>
      </ThemeContextProvider>
    </>
  );
}

export default App;
