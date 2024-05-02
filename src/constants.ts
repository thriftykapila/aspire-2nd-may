import home from "src/assets/Home.svg";
import card from "src/assets/Card.svg";
import Payments from "src/assets/Payments.svg";
import Credit from "src/assets/Credit.svg";
import Settings from "src/assets/Settings.svg";
import fileStorage from "src/assets/file-storage.svg";
import flights from "src/assets/flights.svg";
import megaphone from "src/assets/megaphone.svg";
import { Transaction } from "./Components/CardDetails/CardDetails.interface";

export const TAGLINE =
  "Trusted way of banking for 3,000+ SMEs and startups in Singapore";

export const linksData = [
  { name: "Home", icon: home, highlight: false },
  { name: "Cards", icon: card, highlight: true },
  { name: "Payments", icon: Payments, highlight: false },
  { name: "Credit", icon: Credit, highlight: false },
  { name: "Settings", icon: Settings, highlight: false },
];

export const AVAILABLE_BALANCE = "Available balance";

export const NEW_CARD = "New Card";

export const transactions: Transaction[] = [
  {
    id: 1,
    amount: "+ S$ 150",
    icon: fileStorage,
    textColor: "text-themeGreen",
    color: "bg-lightBlue",
  },
  {
    id: 2,
    amount: "- S$ 150",
    icon: flights,
    textColor: "text-black",
    color: "bg-lightGreen",
  },
  {
    id: 2,
    amount: "- S$ 150",
    icon: megaphone,
    textColor: "text-black",
    color: "bg-lightPink",
  },
  {
    id: 4,
    amount: "- S$ 150",
    icon: fileStorage,
    textColor: "text-black",
    color: "bg-lightBlue",
  },
];
