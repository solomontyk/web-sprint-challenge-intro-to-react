import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {

  const [combinedData, setCombinedData] = useState([])

  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    const fetchData = async () => {
    try {
      const [peopleResponse, planetsResponse] = await Promise.all([
        axios.get(urlPeople),
        axios.get(urlPlanets),
      ]);

      const peopleData = peopleResponse.data;
      const planetsData = planetsResponse.data;

      const combined = peopleData.map(person => {
        const homeworld = planetsData.find(planet => planet.id === person.homeworld);
        return {
          ...person,
          homeworld
        };
      });

      setCombinedData(combined);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData();
  },
  
  []);

console.log(combinedData)

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {combinedData.map(character => (
        <Character info={character} key={character.id} />
      ))}
        </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
