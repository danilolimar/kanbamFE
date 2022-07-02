import { fakeDb } from "./fakeDb";

export const getColabsService = async (token) => {
  const fakeColabs = {
    status: 200,
    data: fakeDb.users,
  };

  const waitFor = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));
  await waitFor(3000);
  return fakeColabs;
};

export const getColabsTypesService = async (token) => {
  const fakeTypes = {
    status: 200,
    data: fakeDb.colabTypes
  };
  const waitFor = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));
  await waitFor(3000);
  return fakeTypes;
};
