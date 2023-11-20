import config from './api.config'

const BASE_URL = config.use.baseURL;

const getPeople = async (url) => {
  try {
    const response = await fetch(url ? url : `${BASE_URL}people/`);
    const json = await response.json()
    return {
      results: json.results,
      next: json.next,
      previous: json.previous,
    }
  } catch(e) {
    console.log(e)
  }
}

export {
  getPeople
};