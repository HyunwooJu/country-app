import React, { useState, useEffect } from "react";
import { fetchCountries } from "../api/countries";
import { Country } from "../types/Country";
import CountryCard from "./CountryCard";
import styled from "styled-components";

const CountryContainer = styled.div`
  padding: 20px;
`;

const CountryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    };
    getCountries();
  }, []);

  const toggleSelectCountry = (country: Country) => {
    setSelectedCountries((prevSelected) =>
      prevSelected.includes(country)
        ? prevSelected.filter((c) => c !== country)
        : [...prevSelected, country]
    );
  };

  const isSelected = (country: Country) => selectedCountries.includes(country);

  return (
    <CountryContainer>
      <div>
        <h2>Favorite Countries</h2>
        <CountryListContainer>
          {selectedCountries.map((country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              onClick={() => toggleSelectCountry(country)}
              isSelected={isSelected(country)}
            />
          ))}
        </CountryListContainer>
      </div>

      <div>
        <h2>Countries</h2>
        <CountryListContainer>
          {countries
            .filter((country) => !isSelected(country))
            .map((country) => (
              <CountryCard
                key={country.name.common}
                country={country}
                onClick={() => toggleSelectCountry(country)}
                isSelected={isSelected(country)}
              />
            ))}
        </CountryListContainer>
      </div>
    </CountryContainer>
  );
};

export default CountryList;
