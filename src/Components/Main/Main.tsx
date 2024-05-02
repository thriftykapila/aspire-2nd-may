import style from "src/Components/Main/Main.module.css";
import Header from "src/Components/Header/Header";
import CardCarousel from "src/Components/Carousel/CardCarousel";
import ActionTray from "src/Components/ActionTray/ActionTray";
import CardDetails from "src/Components/CardDetails/CardDetails";

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
