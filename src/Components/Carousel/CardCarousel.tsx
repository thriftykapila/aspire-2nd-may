import { useState } from "react";
import styles from "./carousel.module.css";
import Logo from "src/assets/Logo-2.svg";
import Visa from "src/assets/VisaLogo.svg";
import Eye from "src/assets/remove_red_eye-24px.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getAccountData } from "../../redux/accountSelector";
import { setSlide } from "../../redux/accountSlice";
import { CardData } from "./CardCarousel.interface";

const CardCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const accountData = useSelector((state) => getAccountData(state));

  const handleSelect = (currentSlide: number) => {
    dispatch(setSlide(currentSlide));
  };

  const [showCardNumber, setShowCardNumber] = useState(false);

  const handleOnClickShowNumber = () => {
    setShowCardNumber((prevState) => !prevState);
  };

  const CardRender: React.FC<CardData> = ({
    cardDisplayName,
    cardNumber,
    cardExpiry,
    freeze,
  }) => {
    const last4Digit = cardNumber?.slice(12, 16);
    return (
      <div className={styles["container"]}>
        <div className={styles["card-number-container"]}>
          <div
            className={styles["show-card-number"]}
            onClick={handleOnClickShowNumber}
          >
            <span>
              <img src={Eye} alt="red eye" className={styles["red-eye"]} />
            </span>
            <span>
              {showCardNumber ? `Hide card number` : `Show card number`}
            </span>
          </div>
        </div>
        <div
          className={`${styles["carousel-card"]} ${
            freeze ? styles["card-freeze"] : ""
          }`}
        >
          <div className={styles["carousel-logo"]}>
            <img src={Logo} className={styles["logo-size"]} alt="aspire" />
          </div>
          <div className={styles["card-detail"]}>
            <p className={styles["card-member-name"]}>{cardDisplayName}</p>
            <div className="flex items-center">
              <div className="flex">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex gap-[6px] mr-[27px]">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="rounded-full w-[9px] h-[9px] bg-white"
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
              <div className={styles["card-number"]}>
                {showCardNumber ? cardNumber : ` ${last4Digit}`}
              </div>
            </div>

            <div className={styles["card-other-detail"]}>
              <p className="font-bold">Thru: {cardExpiry} </p>
              <p className="font-bold">
                CVV: <span className={styles["card-cvv"]}></span> ***
              </p>
            </div>
          </div>
          <div className={styles["carousel-logo-visa"]}>
            <img src={Visa} className={styles["logo-size"]} alt="visa" />
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleSelect,
  };

  return (
    <div className="d-flex justify-content">
      {accountData.length === 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="text text-warning mt-4 fw-bold fs-3">Oh No!</div>
          <div className="text text-white fs-4">No card found !!!</div>
        </div>
      )}
      {accountData.length > 1 ? (
        <Slider {...settings} className={styles["carousel-container"]}>
          {accountData.map((card, index) => (
            <CardRender key={index} {...card} />
          ))}
        </Slider>
      ) : (
        <div>
          {accountData.map((card, index) => (
            <CardRender key={index} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCarousel;
