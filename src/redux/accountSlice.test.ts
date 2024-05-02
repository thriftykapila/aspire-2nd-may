import { configureStore } from '@reduxjs/toolkit';
import accountReducer, { setSlide, handleDeleteCard, handleFreezeCard, addCard } from './accountSlice';

describe('accountSlice reducer', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        account: accountReducer,
      },
    });
  });

  test('should set current slide', () => {
    store.dispatch(setSlide(2));
    const { account } = store.getState();
    expect(account.currentSlide).toEqual(2);
  });

  test('should delete card', () => {
    store.dispatch(setSlide(1)); // Setting current slide to be deleted
    store.dispatch(handleDeleteCard());
    const { account } = store.getState();
    expect(account.accountData.length).toEqual(3);
  });

  test('should freeze/unfreeze card', () => {
    store.dispatch(setSlide(0)); // Setting current slide to freeze/unfreeze
    store.dispatch(handleFreezeCard());
    let { account } = store.getState();
    expect(account.accountData[0].freeze).toEqual(true);
    store.dispatch(handleFreezeCard());
    ({ account } = store.getState());
    expect(account.accountData[0].freeze).toEqual(false);
  });

  test('should add card', () => {
    const newCard = {
      cardDisplayName: 'John Doe',
      cardNumber: '9876543210123456',
      cardExpiry: '12/25',
      cardCvv: '456',
      freeze: false,
    };
    store.dispatch(addCard(newCard));
    const { account } = store.getState();
    expect(account.accountData.length).toEqual(5);
    expect(account.accountData[4]).toEqual(newCard);
  });
});
