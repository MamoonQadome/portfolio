import { BrowserRouter } from "react-router-dom";
import BodyComponent from "./component/body-component/BodyComponent";
import HeaderComponent from "./component/header-component/HeaderComponent";


function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <BodyComponent />
      
    </BrowserRouter>
  );
}

export default App;
