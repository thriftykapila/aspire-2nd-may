import React, { useState } from "react";
import style from "src/Components/CardDetails/CardDetails.module.css";
import downArrow from "src/assets/down-arrow.svg";
import card1Icon from "src/assets/card1Icon.svg";
import recent from "src/assets/recent.svg";
import next from "src/assets/next.svg";
import business from "src/assets/business-and-finance.svg";
import { AccordionItemProps } from "src/Components/CardDetails/CardDetails.interface";
import { transactions } from "src/constants";

const AccordionItem: React.FC<AccordionItemProps> = ({
  icon,
  title,
  content,
  expand,
  onClick,
}) => {
  return (
    <div className={style["main-container"]}>
      <div
        className={`${style["card-container"]} bg-blue-100 shadow-md rounded-md`}
        onClick={onClick}
      >
        <img src={icon} alt="accordion icon" />
        <div
          className={`${style["card-text"]} ml-4 text-base text-blue-900 font-semibold`}
        >
          {title}
        </div>
        <img
          className={`ml-auto ${expand ? "rotate-180" : ""}`}
          src={downArrow}
          alt="accordion icon"
        />
      </div>
      {expand && <div>{content}</div>}
    </div>
  );
};

const CardDetails: React.FC = () => {
  const [accordionState, setAccordionState] = useState([
    { expand: false },
    { expand: true },
  ]);

  const handleAccordionClick = (index: number) => {
    const newAccordionState = accordionState.map((item, i) => {
      if (index === i) {
        return { expand: !item.expand };
      } else {
        return { expand: false };
      }
    });
    setAccordionState(newAccordionState);
  };

  const renderRecentTransactions = () => {
    return (
      <>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`flex border-b-[0.5px] border-blue-100 pt-[24px] pb-[24px] ${style["content"]}`}
          >
            <div className={`h-100 p-3 rounded-full ${transaction.color} mr-2`}>
              <img src={transaction.icon} alt="file storage" />
            </div>
            <div>
              <div className="text-[14px] font-semibold mb-1">Hamleys</div>
              <div className="text-13p text-lightGrey">20 May 2020</div>
              <div className="mt-[12px] flex">
                <div className="pt-[6px] pr-[7px] pb-[6px] pl-[7px] rounded-full bg-themeLightBlue">
                  <img src={business} alt="business" />
                </div>
                <div className="ml-2 text-themeLightBlue text-[12px] font-semibold">
                  Refund on debit card
                </div>
              </div>
            </div>
            <div className="ml-auto flex items-center">
              <div
                className={`font-bold mr-[10px] text-[14px] ${transaction.textColor}`}
              >
                {transaction.amount}
              </div>
              <img src={next} alt="next" height={6.5} />
            </div>
          </div>
        ))}
        <div className="flex justify-center p-3 font-semibold bg-bgGreen text-themeGreen border-borderGreen">
          View all card transactions
        </div>
      </>
    );
  };

  return (
    <div>
      <AccordionItem
        icon={card1Icon}
        title="Card Details"
        content="No card details found!"
        expand={accordionState[0].expand}
        onClick={() => handleAccordionClick(0)}
      />
      <AccordionItem
        icon={recent}
        title="Recent transactions"
        content={renderRecentTransactions()}
        expand={accordionState[1].expand}
        onClick={() => handleAccordionClick(1)}
      />
    </div>
  );
};

export default CardDetails;
