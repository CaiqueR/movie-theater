export default async function api(route, params = {}) {
  const url = new URL(`https://api.themoviedb.org/3${route}`);
  url.search = new URLSearchParams({ ...params, api_key: process.env.API_KEY });
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
