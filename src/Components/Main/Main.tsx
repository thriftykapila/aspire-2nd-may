import style from "./Main.module.css";
import Header from "../../Components/Header/Header";
import CardCarousel from "../../Components/Carousel/CardCarousel";
import ActionTray from "../../Components/ActionTray/ActionTray";
import CardDetails from "../../Components/CardDetails/CardDetails";

const Main = () => {
  return (
    <div className={`${style["main-container"]}`}>
      <Header />
      <div className={`${style["card-container"]}`}>
        <div>
          <CardCarousel />
          <ActionTray />
        </div>
        <CardDetails />
      </div>
    </div>
  );
};

export default Main;
