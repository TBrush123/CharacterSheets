import { useEffect, useState } from "react";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("/api/characters");
      const json = await response.json();

      if (response.ok) {
        setCharacters(json);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="home">
      {characters &&
        characters.map((character) => {
          return (
            <div className="character" key={character._id}>
              <h2>{character.name}</h2>
              <p>Level: {character.level}</p>
              <h4>Class: {character.class}</h4>
              <h4>Race:{character.race}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
