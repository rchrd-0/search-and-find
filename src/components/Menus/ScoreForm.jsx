import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Styled/Button';

const ScoreForm = (props) => {
  const { addScore, hideForm } = props;
  const [name, setName] = useState('');
  const [valid, setValid] = useState(false);

  const handleInput = (e) => {
    const { value } = e.target;

    setName(value);
  };

  useEffect(() => {
    name.length === 3 ? setValid(true) : setValid(false);
  }, [name]);

  return (
    <FormLayout
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) {
          addScore(name);
          hideForm();
        }
      }}
      noValidate
    >
      <FormInstructions>
        Submit your score (3 character names only)
      </FormInstructions>
      <NameInput required value={name} onChange={handleInput} />
      <SubmitBtn type="submit">Submit</SubmitBtn>
    </FormLayout>
  );
};

ScoreForm.propTypes = {
  addScore: PropTypes.func,
  hideForm: PropTypes.func,
};

const FormLayout = styled.form`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin: 12px 0;
  padding: 0 24px;
  flex-wrap: wrap;
`;

const FormInstructions = styled.div`
  width: 100%;
  font-weight: 300;
  text-align: center;
`;

const NameInput = styled.input.attrs({
  type: 'text',
  maxLength: '3',
  minLength: '3',
  placeholder: 'Name',
})`
  width: 8ch;
  text-align: center;
  display: flex;
  border-radius: 8px;
  font-size: 1.2rem;
  font-family: inherit;
  background-color: #c7c9d3;
  text-transform: uppercase;
  outline: none;
  border: none;
  font-weight: 500;

  &::placeholder {
    font-size: 1.1rem;
    text-transform: none;
    color: #727790;
    font-weight: 400;
  }
`;

const SubmitBtn = styled(Button)`
  background-color: ${(props) => props.theme.color.valid};
  color: white;
  font-weight: 500;
`;

export default ScoreForm;
