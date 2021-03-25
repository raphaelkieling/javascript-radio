import { AiOutlineClockCircle } from "react-icons/ai";
import CardStyle from "./Card.module.css";

function Card() {
  return (
    <details className={CardStyle.container}>
      <summary>
        <div>
          <span className={CardStyle.when}>
            10. Jan 2018
            <AiOutlineClockCircle className={CardStyle["clock-icon"]} /> 45 min
          </span>
          <div className={CardStyle.title}>
            State Management with Apollo w/ Jake Dawkins
          </div>
        </div>
      </summary>
      <p className={CardStyle.content}>
        Jake Dawkins is a lead software engineer at Major League Soccer in New
        York. Tune in to learn about his work at MLS as well as how to use
        Apollo's new apollo-link-state library for state management in React
        applications
      </p>
    </details>
  );
}

export default Card;
