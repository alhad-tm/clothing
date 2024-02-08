import "./App.css";
import "./index.css";

import Banner from "./components/banner/banner";
import Header from "./components/Header/header";  
import About from "./components/about/about";
import Mode from "./components/mode/mode";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About/>
      <Mode/>
    </div>
  );
}

export default App;
