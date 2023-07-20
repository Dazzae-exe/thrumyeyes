import Slider from "../../Components/Slider/Slider";
import Portfolio from "../../Components/Portfolio/Portfolio";
import "../../assets/styles/Home/_Home.scss";

function Home() {
  return (
    <div className="Home-GridSystem">
      <Slider />
      <Portfolio />
    </div>
  );
}

export default Home;
