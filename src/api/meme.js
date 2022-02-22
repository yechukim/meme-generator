const MEME_API = "https://meme-api.herokuapp.com/gimme"

export const getMeme = async () => {
  return await fetch(MEME_API)
    .then(res => res.json())
    .then(res => res.url)
    .catch(error => console.error(error.message))
}
