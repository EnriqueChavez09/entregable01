const generateRandom = (numberOne, numberTwo) => {
  const numberPossibilities = numberTwo - numberOne;
  const number = Math.floor(Math.random() * numberPossibilities);
  return parseInt(numberOne) + number;
};

export const generateRandomColor = () => {
  const hexadecimal = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    // "F",
  ];

  let color = "#";
  for (let i = 0; i < 6; i++) {
    const array = generateRandom(0, hexadecimal.length);
    color += hexadecimal[array];
  }
  return color;
};
