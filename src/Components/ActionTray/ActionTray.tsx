import { useState } from "react";
import style from "./ActionTray.module.css";
import FreezeCard from "src/assets/Freezecard.svg";
import setSpent from "src/assets/SetLimit.svg";
import GPay from "src/assets/GPay.svg";
import Replace from "src/assets/Replacecard.svg";
import Cancel from "src/assets/Deactivatecard.svg";
import { Modal, Button } from "react-bootstrap";
import { getAccountData, getAccountSlide } from "../../redux/accountSelector";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteCard, handleFreezeCard } from "../../redux/accountSlice";

const ActionTray = () => {
  const dispatch = useDispatch();
  const accountData = useSelector(getAccountData);
  const currentSlide = useSelector(getAccountSlide);
  const isFreezeCard = accountData[currentSlide]?.freeze;

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const freezeCard = () => {
    dispatch(handleFreezeCard());
  };

  const deleteCard = () => {
    dispatch(handleDeleteCard());
  };

  return (
    <div className={` ${style["action-tray"]}`}>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this card?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteCard();
              handleClose();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={`${style["nav-link"]}`} onClick={freezeCard}>
        <img src={FreezeCard} alt={"Freeze Card"} />
        <div className={`${style["active-text"]}`}>
          {isFreezeCard ? `Unfreeze Card` : `Freeze Card`}
        </div>
      </div>
      <div className={`${style["nav-link"]}`}>
        <img src={setSpent} alt={"Set Spent Limit"} />
        <div className={`${style["active-text"]}`}>Set spend limit</div>
      </div>
      <div className={`${style["nav-link"]}`}>
        <img src={GPay} alt={"Add to GPay"} />
        <div className={`${style["active-text"]}`}>Add to GPay</div>
      </div>
      <div className={`${style["nav-link"]}`}>
        <img src={Replace} alt={"Replace Card"} />
        <div className={`${style["active-text"]}`}>Replace Card</div>
      </div>
      <div
        className={`${style["nav-link"]}`}
        onClick={() => {
          accountData.length > 0 && handleShow();
        }}
      >
        <img src={Cancel} alt={"Cancel Card"} />
        <div className={`${style["active-text"]}`}>Cancel Card</div>
      </div>
    </div>
  );
};

export default ActionTray;
