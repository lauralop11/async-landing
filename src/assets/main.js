const content = null || document.getElementById("content");
const url = 'https://rickandmortyapi.com/api';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}
(async () => {
  try {
    const characters = await fetchData(`${url}/character`);
    let view = `
    ${characters.results.map(character =>{
      return `<div class="group relative">
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            ${character.name}
          </h3>
          <p class="text-sm text-gray-500">
            ${character.status}
          </p>
        </div>
      </div>`
    }).splice(0,4).join('')}`;

    content.innerHTML = view;
  }
  catch (error) {
    console.error(error);
  }
})();

