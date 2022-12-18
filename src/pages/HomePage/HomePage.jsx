import { QuoteBoxContainer } from "../../containers";
import quotes from "../../data/quotes.json"
export const HomePage = () => {
  return (
    <div className="homePage">
      <QuoteBoxContainer quotes={quotes}/>
    </div>
  );
};
