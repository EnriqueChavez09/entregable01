import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { ButtonComponent, TextComponent } from "../../components";
import { generateRandomColor } from "../../helpers/generateRandomColor";
import { generateRandomNumber } from "../../helpers/generateRandomNumber";

export const QuoteBoxContainer = ({ quotes }) => {
  const initalNumber = generateRandomNumber(quotes.length);
  const color = generateRandomColor();
  const [quote, setQuote] = useState(quotes[initalNumber]);
  document.body.style.backgroundColor = color;
  const changeStyle = () => {
    const number = generateRandomNumber(quotes.length);
    const newQuote = quotes[number];
    setQuote(newQuote);
  };
  const quoteStyle = {
    color: color,
  };
  const authorStyle = {
    color: color,
  };
  return (
    <div className="quoteBoxContainer">
      <div className="quoteBoxContainer__quote">
        <div className="quoteBoxContainer__quote__icon">
          <FaQuoteLeft color={color} width="429px" />
        </div>
        <div className="quoteBoxContainer__quote__text">
          <TextComponent text={quote.quote} style={quoteStyle} />
        </div>
      </div>
      <div className="quoteBoxContainer__author">
        <TextComponent text={quote.author} style={authorStyle} />
      </div>
      <div className="quoteBoxContainer__button">
        <ButtonComponent color={color} changeStyle={changeStyle} />
      </div>
    </div>
  );
};
