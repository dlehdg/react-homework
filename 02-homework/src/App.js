import "./App.css";
import Banner from "./components/Banner/Banner";
import MainSwiper from "./components/Mainswiper/Mainswiper";
import Subswiper from "./components/Subswiper/Subswiper";

const itemlist = [
  {
    brand: "대구 반할만떡",
    desc: "유부호만두",
    discount: 24,
    price: 5244,
    realprice: 6000,
    img: "/images/main/today-swiper/today1.jpg",
  },
  {
    brand: "풀무원",
    desc: "탱탱쫄면(4개입)",
    discount: 0,
    price: 4980,
    realprice: 0,
    img: "/images/main/today-swiper/today2.jpg",
  },
  {
    brand: "풀무원",
    desc: "유기농 밀키퀸 현미 4kg",
    discount: 10,
    price: 25000,
    realprice: 22500,
    img: "/images/main/today-swiper/today3.jpg",
  },
  {
    brand: "프로쉬",
    desc: "베이비 세탁세",
    discount: 24,
    price: 18900,
    realprice: 24000,
    img: "/images/main/today-swiper/today4.jpg",
  },
  {
    brand: "풀무원",
    desc: "탱탱쫄면(4개입)",
    discount: 0,
    price: 4980,
    realprice: 0,
    img: "/images/main/today-swiper/today2.jpg",
  },
  {
    brand: "프로쉬",
    desc: "베이비 세탁세",
    discount: 24,
    price: 18900,
    realprice: 24000,
    img: "/images/main/today-swiper/today3.jpg",
  },
  {
    brand: "풀무원",
    desc: "유기농 밀키퀸 현미 4kg",
    discount: 10,
    price: 25000,
    realprice: 22500,
    img: "/images/main/today-swiper/today1.jpg",
  },
  {
    brand: "프로쉬",
    desc: "베이비 세탁세",
    discount: 24,
    price: 18900,
    realprice: 24000,
    img: "/images/main/today-swiper/today4.jpg",
  },
];

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
