import URL from '../config';

const URL_CATEGORIES = `${URL}/categorias`;

async function getAll() {
  const ask = await fetch(`${URL_CATEGORIES}`);
  if (ask.ok) {
    const answer = await ask.json();
    return answer;
  }
  throw new Error('Não foi possível pegar os dados :(');
}

async function getAllWithVideos() {
  const ask = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (ask.ok) {
    const answer = await ask.json();
    return answer;
  }
  throw new Error('Não foi possível retornar os dados');
}

export default {
  getAllWithVideos,
  getAll
};
