import React from "react";
import CountryList from "./components/CountryList";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <CountryList />
    </AppContainer>
  );
};

export default App;
