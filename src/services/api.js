import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (page = 1, name = "") => {
  const response = await axios.get(`${BASE_URL}/character`, {
    params: {
      page,
      name,
    },
  });

  return response.data;
};

export const getCharacter = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/character/${id}`
  );

  return response.data;
};