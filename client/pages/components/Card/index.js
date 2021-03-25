import { Details, Title, When, ClockIcon } from "./index.styles";

function Card({ date, minutes, title, description }) {
  return (
    <Details>
      <summary>
        <div>
          <When>
            {date}
            <ClockIcon /> {minutes} min
          </When>
          <Title>{title}</Title>
        </div>
      </summary>

      <p>{description}</p>
    </Details>
  );
}

export default Card;
