import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormData from "./components/Form/FormData";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./components/ContextProvider";
import Model from "./components/Model/Model";

function App() {
  return (
    <ContextProvider>
      <div className="App row container-flex">
        <div className="col">
          <FormData />
          <Model />
        </div>
        <div className="col">
          <Cart />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
