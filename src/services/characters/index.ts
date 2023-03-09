import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';

export const getAllCharacters = async () => {
    const { data } = await axios.get(`${baseUrl}/character`);
    return data;
}

export const getRandomCharacters = async (characters:number[]) => {
    const { data } = await axios.get(`${baseUrl}/character/${characters}`);
    return data;
}