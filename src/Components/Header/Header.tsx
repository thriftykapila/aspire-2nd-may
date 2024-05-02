import React, { useState } from "react";
import style from "./Header.module.css";
import { AVAILABLE_BALANCE, NEW_CARD } from "../../constants";
import plus from "src/assets/plus.svg";
import { Modal, Button } from "react-bootstrap";
import { generateRandom12DigitNumber, generateRandomMMYY } from "../../utils";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/accountSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const handleNewCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserName("");
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSaveCard = () => {
    const cardData = {
      cardDisplayName: userName,
      cardNumber: generateRandom12DigitNumber(),
      cardExpiry: generateRandomMMYY(),
      cardCvv: "123",
      freeze: false,
    };
    dispatch(addCard(cardData));
    handleCloseModal();
  };

  return (
    <div className={`${style["header"]}`}>
      <div className="14p">{AVAILABLE_BALANCE}</div>
      <div className="flex justify-between items-center">
        <div className={`flex ${style["currency"]}`}>
          <div
            className={`bg-themeGreen text-white ${style["currency-symbol"]}`}
          >
            S$
          </div>
          <div className={`${style["balance"]}`}>3,000</div>
        </div>
        <button
          onClick={handleNewCardClick}
          className={`flex items-center justify-center bg-themeLightBlue text-white text-13p ${style["new-card-btn"]}`}
        >
          <img src={plus} alt="add new card" />
          <div className="font-bold">{NEW_CARD}</div>
        </button>
      </div>
      <div className={` ${style["tabs"]}`}>
        <div className={`text-14p font-semibold ${style["debit-cards"]} `}>
          My debit cards
        </div>
        <div className="text-14p font-semibold opacity-30">
          All company cards
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Card Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Card Name"
            value={userName}
            onChange={handleUserNameChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCard}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
