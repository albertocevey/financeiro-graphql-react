import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Cartoes from "./component/pages/Cartoes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSidebar from "./scenes/global/LeftSidebar";
import Home from "./component/pages/Home";
import DetalhesCartao from "./component/pages/DetalhesCartao";
import AdicionarCartao from "./component/pages/AdicionarCartao";

function App() {
  const [theme, colorMode]: any = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <LeftSidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route
                  index
                  path="financeiro-graphql-react"
                  element={<Home />}
                />
                <Route
                  path="financeiro-graphql-react/detalhescartao/:cartaoId"
                  element={<DetalhesCartao />}
                  loader={({ params }: any) => {}}
                />
                <Route
                  path="financeiro-graphql-react/cartoes/"
                  element={<Cartoes />}
                />
                <Route
                  path="financeiro-graphql-react/adicionarCartao/"
                  element={<AdicionarCartao />}
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}
export default App;
