import FormPage from "./components/form";
import Header from "./components/header";
import './index.css'

function App() {
  return (
    <div className="appContainer">
      <Header></Header>
    
    <div className="form">
      <FormPage></FormPage>
    </div>
    </div>
  );
}

export default App;
