import React, { useState, useEffect } from "react";
import Card from "@/components/card";
import Button from "@/components/button";
import { getRandomCharacters } from "@/services/characters";
import { getRandomNumber } from "@/utils";

interface Character {
    name: string;
    gender: string;
    image: string;
}


export default function CardPage() {
    const [characters, setCharacters] = useState<Character[]>([]);

    //generate a array with five random numbers
    const generateRandomNumbers = () => {
        const randomNumbers: number[] = [];
        while (randomNumbers.length < 5) {
            const randomNumber = getRandomNumber(1, 826);
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }
        return randomNumbers;
    };

    const getFiveRandomCharacters = async () => {
        try {
            const response = await getRandomCharacters(generateRandomNumbers());
            setCharacters(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getRandomCharacter = async () => {
        try {
            const response = await getRandomCharacters([getRandomNumber(1, 826)]);
            //adicionei o spread operator para adicionar o novo personagem no array de personagens

            setCharacters([...characters, response]);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(characters);
    useEffect(() => {
        getFiveRandomCharacters();
    }, []);

    function shuffleArray<T>(array: T[]): T[] {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      }

    const shuffleCharacters = () => {
        setCharacters(shuffleArray(characters));
    };




    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {characters.map((character, index) => (
                    <Card
                    key={index}
                    name={character.name}
                    description={character.gender}
                    imageUrl={character.image}
                    />  
                    ))}
            </div>
            <div className="flex justify-center mt-2">
                <button
                    className="px-3 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                    onClick={getRandomCharacter}
                >
                    Puxar Carta
                </button>
                <button
                    className="px-3 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                    onClick={() => shuffleCharacters()}
                >
                    Embaralhar
                </button>
            </div>
        </div>
    );
}