import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardData {
  cardDisplayName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  freeze: boolean;
}

interface AccountState {
  currentSlide: number;
  accountData: CardData[];
}

const initialState: AccountState = {
  currentSlide: 0,
  accountData: [
    {
      cardDisplayName: "Rahul",
      cardNumber: "1234567899876543",
      cardExpiry: "12/24",
      cardCvv: "123",
      freeze: false,
    },
    {
      cardDisplayName: "Sham",
      cardNumber: "1234567899876543",
      cardExpiry: "12/24",
      cardCvv: "123",
      freeze: false,
    },
    {
      cardDisplayName: "Ram",
      cardNumber: "1234567899876543",
      cardExpiry: "12/24",
      cardCvv: "123",
      freeze: false,
    },
    {
      cardDisplayName: "Rocky",
      cardNumber: "1234567899876543",
      cardExpiry: "12/24",
      cardCvv: "123",
      freeze: false,
    },
  ],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setSlide: (state, action: PayloadAction<number>) => {
      state.currentSlide = action.payload;
    },
    handleDeleteCard: (state) => {
      const updatedAccount = state.accountData
        .map((item, index) => {
          if (index === state.currentSlide) {
            return null;
          } else {
            return item;
          }
        })
        .filter(Boolean) as CardData[];
      state.accountData = updatedAccount;
    },
    handleFreezeCard: (state) => {
      const updatedAccount = state.accountData.map((item, index) => {
        if (index === state.currentSlide) {
          return { ...item, freeze: !item.freeze };
        } else {
          return item;
        }
      });
      state.accountData = updatedAccount;
    },
    addCard: (state, action: PayloadAction<CardData>) => {
      state.accountData.push(action.payload);
    },
  },
});

export const { setSlide, handleDeleteCard, handleFreezeCard, addCard } = accountSlice.actions;

export default accountSlice.reducer;
