import { atom } from "jotai";

// test
export const counterAtom = atom(0);

export const filtersAtom = atom({
  utilisation: null,
  position: null,
  preference: null,
  matelas: null,
  poids: null,
  taille: null,
  age: null,
  corpulence: null,
  type: null,
});

export const compareListAtom = atom([]);

export const preferenceAtom = atom(null);

export const comparatorQuery = atom(null);

export const dataCompareList = atom(async (get, set) => {
  const query = get(comparatorQuery);
  const res = await fetch(
    `https://ij0p5befru.preview.infomaniak.website/wp-json/wp/v2/matelas?${query}`
  );
  const data = await res.json();
  /* await set(compareListAtom, data); */
  return data;
});
