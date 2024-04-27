"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function CharacterProfilePage() {
  const idParams = useSearchParams();
  const characterId = idParams.get("id");
  const [character, setCharacter] = useState({
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  });
  const [firstEpisode, setFirstEpisode] = useState("");

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch character");
      }
      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  const fetchFirstEpisode = async () => {
    try {
      const response = await fetch(`${character.episode[0]}`);
      if (!response.ok) {
        throw new Error("Failed to fetch first episode");
      }
      const data = await response.json();
      setFirstEpisode(data.name!);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };
  useEffect(() => {
    if (characterId) {
      fetchCharacter();
    }
  }, [characterId, fetchCharacter]);

  useEffect(() => {
    if (characterId) {
      fetchFirstEpisode();
    }
  }, [character, fetchFirstEpisode]);

  return (
    <>
      <NavBar />
      <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 border-2 border-gray-300">
        <div className="flex flex-col items-center">
          <img
            src={character.image}
            className="w-32 h-32 mt-4 rounded-full"
            alt={`Imagen de ${character.name}`}
          />
          <h3 className="mt-4 text-4xl font-bold">{character.name}</h3>
          <p className="text-green-600">{character.origin.name}</p>
          <div className="mt-4 p-4 w-full">
            <div className="bg-green-600 text-white p-2 my-2 rounded">
              <p><strong>Gender:</strong> {character.gender}</p>
            </div>
            <div className="bg-green-600 text-white p-2 my-2 rounded">
              <p><strong>Status:</strong> {character.status}</p>
            </div>
            <div className="bg-green-600 text-white p-2 my-2 rounded">
              <p><strong>Specie:</strong> {character.species}</p>
            </div>
            <div className="bg-green-600 text-white p-2 my-2 rounded">
              <p><strong>First episode:</strong> {firstEpisode}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterProfilePage;
