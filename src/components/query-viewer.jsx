import React, { useState } from 'react';
import styled from 'styled-components';
import { parse } from '../utils/query-parameters';
import BackButton from '../components/back-button';
import { colors } from '../styles/vars';
import { getFragment } from '../utils/query-parameters';

const borderRadius = '1.25rem';
const rowPadding = '.25rem .5rem';
const Container = styled.div`
  margin-bottom: 1rem;
`;
const selectedColor = colors.accent1;

const Row = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-right: 2px solid ${colors.primary};
  border-left: 2px solid ${colors.primary};
  border-color: ${props => props.selected ? selectedColor : colors.primary};
  cursor: pointer;
  &:hover {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
    border-color: ${selectedColor};
    label {
      background: ${selectedColor};
    }
    span {
      color: ${selectedColor};
    }
  }
  &:first-child {
    border-radius: ${borderRadius} ${borderRadius} 0 0;
    border-top: 2px solid #eb6896;
    label,
    span {
      padding-top: 0.5rem;
    }
  }
  &:last-child {
    border-bottom: 2px solid ${colors.primary};
    border-radius: 0 0 ${borderRadius} ${borderRadius};
    label,
    span {
      padding-bottom: 0.5rem;
    }
  }
  label {
    text-align: right;
    padding: ${rowPadding};
    color: black;
    background: ${props => props.selected ? selectedColor : colors.primary};
    flex-basis: 50%;
  }

  span {
    padding: ${rowPadding};
    color: ${props => props.selected ? selectedColor : colors.primary};
    white-space: ${props => props.selected ? 'wrap' : 'nowrap'};
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export default function QueryViewer({ url }) {
  const [selectedRow, setSelectedRow] = useState(getFragment());
  const params = parse(url);
  const handleSelectRow = key => {
    window.location.hash = `#${key}`;
    setSelectedRow(key);
  }

  return (
    <div>
      <Container>
        {params &&
          params.map(param => (
            <Row
              selected={selectedRow === param.key}
              onClick={() => handleSelectRow(param.key)}
              key={param.key}
            >
              <label>{param.key}</label>
              <span>{param.value}</span>
            </Row>
          ))}
      </Container>
      <BackButton />
    </div>
  );
}
