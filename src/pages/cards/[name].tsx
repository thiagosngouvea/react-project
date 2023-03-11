import React, { useState, useEffect } from "react";
import Card from "@/components/card";
import Button from "@/components/button";
import { getRandomCharacters } from "@/services/characters";
import { getRandomNumber } from "@/utils";
import { useRouter } from "next/router";

interface Character {
    name: string;
    gender: string;
    image: string;
}


export default function CardPage() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const router = useRouter();
    const { name } = router.query;

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
            setCharacters([...characters, response]);
        } catch (error) {
            console.log(error);
        }
    };

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
        <div className="h-screen"> 
            <div className="grid">
                <h1 className="grid justify-end text-3xl font-bold text-gray-600 p-4">{name}</h1>
            </div>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
                    <Button
                        className="mr-2"
                        type="button"
                        disabled={characters.length >= 8}
                        onClick={getRandomCharacter}
                    >
                        {characters.length >= 8 ? "Limite de cartas atingido" : "Puxar Carta"}
                    </Button>
                    <Button
                        type="button"
                        onClick={() => shuffleCharacters()}
                    >
                        Embaralhar
                    </Button>
                </div>
            </div>
        </div>
    );
}