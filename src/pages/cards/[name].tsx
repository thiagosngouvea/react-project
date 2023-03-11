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
    value: number;
}


export default function CardPage() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [scroll, setScroll] = useState<Boolean>(false);
    const router = useRouter();
    const { name } = router.query;

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
            const characters = response.map((character: any) => {
                return {
                    name: character.name,
                    gender: character.gender,
                    image: character.image,
                    value: getRandomNumber(1, 10),
                };
                });
            setCharacters(characters);
        } catch (error) {
            console.log(error);
        }
    };

    const getRandomCharacter = async () => {
        try {
            const response = await getRandomCharacters([getRandomNumber(1, 826)]);
            const randomCharacter = response.map((character: any) => {
                return {
                    name: character.name,
                    gender: character.gender,
                    image: character.image,
                    value: getRandomNumber(1, 10),
                };
                });
            setCharacters([...characters, randomCharacter]);
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
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${scroll ? "h-full" : "h-screen"} bg-gray-50 dark:bg-gray-900`}> 
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
                        value={character.value}
                        />  
                        ))}
                </div>
                <div className="flex justify-center mt-2">
                    <Button
                        className={characters.length >= 8 ? "cursor-not-allowed bg-gray-400 mr-2" : "bg-blue-500 hover:bg-blue-600 mr-2"}
                        type="button"
                        disabled={characters.length >= 8}
                        onClick={getRandomCharacter}
                    >
                        {characters.length >= 8 ? "Limite de cartas atingido" : "Puxar Carta"}
                    </Button>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600"
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