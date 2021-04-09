import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
`;

export const Form = styled.form`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  label {
    margin-top: 20px;
  }

  button {
    margin: 20px 0;
  }
`;
