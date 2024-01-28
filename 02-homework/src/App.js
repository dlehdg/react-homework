import "./App.css";
import Banner from "./components/Banner/Banner";
import MainSwiper from "./components/Mainswiper/Mainswiper";
import Subswiper from "./components/Subswiper/Subswiper";

const itemlist = [];

function App() {
  return (
    <div className="App">
      <MainSwiper />
      <Subswiper itemlist={itemlist} />
      <Banner />
      <Subswiper itemlist={itemlist} />
    </div>
  );
}

export default App;
