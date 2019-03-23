import React, { useState } from 'react';
import styled from 'styled-components';

const borderRadius = '2rem';
const defaultColor = '#eb6896';
const focusColor = '#FF71A3';
const transition = 'all .2s ease-in-out';

const Form = styled.form`
  height: 2.5rem;
  display: flex;
  border-radius: ${borderRadius};
  transition: ${transition};
  border: 2px solid ${defaultColor};
  overflow: hidden;

  &:focus-within {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
    border-color: ${focusColor};
    button {
      background: ${focusColor};
    }

    input {
      color: ${focusColor};
    }
  }
  input {
    font-size: inherit;
    padding: 0 1rem 0 1rem;
    flex-grow: 1;
    outline: none;
    background: transparent;
    border-radius: ${borderRadius} 0 0 ${borderRadius};
    color: ${defaultColor};
    border: none;
  }

  button {
    display: flex;
    align-items: center;
    text-align: flex-end;
    font-size: inherit;
    outline: none;
    padding: 0 2rem;
    background: ${defaultColor};
    transition: ${transition};
    cursor: pointer;
    border: none;
  }
`;

export default function ParseForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    return onSubmit(value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button>go</button>
    </Form>
  );
}
