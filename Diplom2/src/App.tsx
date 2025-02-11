import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ThemeContextProvider from "./context/Theme.Provider";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header></Header>
        <MainContainer>
          <MainPage></MainPage>
        </MainContainer>
      </ThemeContextProvider>
    </>
  );
}

export default App;
