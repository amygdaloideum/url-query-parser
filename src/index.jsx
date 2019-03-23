import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';
import { colors } from './styles/vars';

import GlobalStyle from './styles';
import queryParams from './utils/query-parameters';
import ParseForm from './components/parse-form';
import QueryViewer from './components/query-viewer';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 25rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.accent1};
`;

const handleSubmit = value => {
  window.location = `${window.location.origin}?url=${encodeURIComponent(value)}`;
};

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <MainContent>
        <Title>url query parser</Title>

        {queryParams.url ? (
          <QueryViewer url={queryParams.url} />
        ) : (
          <ParseForm onSubmit={handleSubmit} />
        )}
      </MainContent>
    </MainContainer>
  );
}

ReactDOM.render(<App />, document.getElementById('app-container'));
