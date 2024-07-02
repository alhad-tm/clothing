import "./App.css";
import "./index.css";
import Header from "./components/header/header"; 
import Banner from "./components/banner/banner";
 
import About from "./components/about/about";

import Footer from "./components/footer/footer";



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About/>

      <Footer/>  
   
    </div>
  );
}
   
export default App;  
