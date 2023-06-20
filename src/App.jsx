import { BrowserRouter } from "react-router-dom";
import RouteApp from './routes/';
import { ProdutosProvider } from './contexts/ProductsProvider'
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <ProdutosProvider>
        <Header/>
        <RouteApp/>
      </ProdutosProvider>
    </BrowserRouter>
  );
}

export default App;
