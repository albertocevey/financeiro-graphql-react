import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Cartoes from "./component/pages/Cartoes";
import { Route, Routes } from "react-router-dom";
import LeftSidebar from "./scenes/global/LeftSidebar";
import Home from "./component/pages/Home";
import Cartao from "./component/pages/DetalhesCartao";
import { useCartaoQuery } from "generated";
import DetalhesCartao from "./component/pages/DetalhesCartao";
import AdicionarCartao from "./component/pages/AdicionarCartao";

function App() {
  const [theme, colorMode]: any = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <LeftSidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/detalhescartao/:cartaoId"
                element={<DetalhesCartao />}
                loader={({ params }: any) => {}}
              />
              <Route path="/cartoes/" element={<Cartoes />} />
              <Route path="/adicionarCartao/" element={<AdicionarCartao />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
