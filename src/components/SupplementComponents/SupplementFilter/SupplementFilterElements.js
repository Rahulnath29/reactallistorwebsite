import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Search = styled.div`
  width: 500px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const SearchBarInput = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  border-style: none;
  width: 300px;
  padding: 15px 15px 15px 15px;
  border-radius: 50px;
  box-shadow: 3px 3px #888888;
  border: none;
  font-size: 1.5rem;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

  background: #b30000;
  ::placeholder {
    color: white;
    opacity: 1;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const SearchIcon = styled.i`
  position: absolute;
  color: white;
  font-size: 24px;
  right: 22%;
  padding: 0;
`;
