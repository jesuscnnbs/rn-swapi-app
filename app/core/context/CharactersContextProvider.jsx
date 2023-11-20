import { createContext, useState } from "react";

export const Context = createContext()

export default CharacterProvider = (props) => {
  const [characters, setCharacters] = useState({
    people: [],
    nextPage: ''
  });
  return (
    <Context.Provider value={[characters, setCharacters]}>
      {props.children}
    </Context.Provider>
  );
}