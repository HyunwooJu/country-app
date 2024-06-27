import React from "react";
import { Country } from "../types/Country";
import styled from "styled-components";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
  isSelected: boolean;
}

const Card = styled.div<{ isSelected: boolean }>`
  border: ${({ isSelected }) =>
    isSelected ? "2px solid green" : "1px solid #e0e0e0"};
  margin: 10px;
  text-align: center;
  cursor: pointer;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: white;
  font-family: "Roboto", sans-serif;
  border-radius: 10px; /* 모서리를 둥글게 */
  overflow: hidden; /* 둥근 모서리 적용 시 내용이 넘치지 않도록 */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 150px; /* 고정된 높이 */
    object-fit: cover; /* 이미지 비율을 유지하며 크기를 맞춤 */
  }

  h2 {
    font-size: 1.2em;
    margin: 10px 0;
  }

  p {
    margin: 0;
    padding: 0 10px 10px;
    font-size: 0.9em;
    color: #757575;
  }
`;

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onClick,
  isSelected,
}) => {
  return (
    <Card onClick={onClick} isSelected={isSelected}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h2>{country.name.common}</h2>
      <p>{country.capital ? country.capital[0] : "N/A"}</p>
    </Card>
  );
};

export default CountryCard;
