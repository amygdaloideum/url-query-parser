import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  padding: .5rem 1rem;
  border: 2px solid #02A676;
  color: #02A676;
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
`;

export default function BackButton() {
  return <Button onClick={() => (window.location = window.location.origin)}>back</Button>;
}
