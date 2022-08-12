import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid blue;
  background-color: skyblue;

  img {
    object-fit: cover;
    object-position: top;
    max-height: 250px;
  }

  button {
    background-color: black;
    color: white;
  }
  div {
    padding: 1rem;
    height: 100%;
  }
`;
