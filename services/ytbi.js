import { Player } from "youtubei.js";

const fakeCache = {
  set: (key, val) => console.log(`['fakeCache']: ${key}, ${val.length}`),
};

export const getPlayer = async (id) => {
  const newPlayer = await Player.create(fakeCache);
  return;
};
