import { useState, useContext } from "react";
import { Context as CharactersContext } from "../../../core/context/CharactersContextProvider";
import config from '../../../core/api/api.config'
import data from '../data/data';
import { getPeople } from "../../../core/api/swapiHelper";

const BASE_URL = config.use.baseURL;

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
  const handleGetPeople = async (url) => {
    console.log('CHARACTERS STATE: ', characters.nextPage)
    if(characters.nextPage || !characters.people.length ) {
      setLoading(true);
      const uniformResourceLocator = url ? url : `${BASE_URL}/people/`;
      const {results, next} = await getPeople(uniformResourceLocator);
      const combinedResults = addImageUri(results, data)
      setCharacters({
        people: [...characters.people, ...combinedResults],
        nextPage: next
      })
      setLoading(false);
    }
  }

  return { characters, loading, handleGetPeople }
}
