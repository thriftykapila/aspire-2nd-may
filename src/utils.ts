export function generateRandom12DigitNumber() {
    let random12DigitNumber = "";
    for (let i = 0; i < 12; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      random12DigitNumber += randomDigit;
    }
    return random12DigitNumber;
  }
  
  export function generateRandomMMYY() {
    const currentYear = new Date().getFullYear();
    const randomYear = Math.floor(Math.random() * 10) + currentYear;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const formattedMonth = randomMonth < 10 ? `0${randomMonth}` : randomMonth;
    return `${formattedMonth}/${randomYear.toString().slice(2)}`;
  }
  