import { useState, useContext } from "react";
import { Context as CharactersContext } from "../../../core/context/CharactersContextProvider";
import data from '../data/data';
import { getPeople } from "../../../core/api/swapiHelper";

const addImageUri = (swapiArray, uriArray) => {
  const combinedArr = swapiArray.map(swapiItem => {
    const newElem = uriArray.find(uriElem => uriElem.name == swapiItem.name)
    if(newElem) return {...swapiItem, uri: newElem.uri}
    return swapiItem
  })
  return combinedArr
}

export default useCharacters = () => {
  const [characters, setCharacters] = useContext(CharactersContext)
  const [loading, setLoading] = useState(false)
  console.log('CHARACTERS STATE: ', characters.nextPage)
  const handleGetPeople = async (url) => {
    setLoading(true);
    const {results, next} = await getPeople(url);
    const combinedResults = addImageUri(results, data)
    setCharacters({
      people: [...characters.people, ...combinedResults],
      nextPage: next
    })
    setLoading(false);
  }

  return { characters, loading, handleGetPeople }
}
