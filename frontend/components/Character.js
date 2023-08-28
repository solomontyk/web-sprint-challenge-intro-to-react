import React, { useState } from 'react'

function Character({ info }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeWorld, setShowHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState)
  
}; 

  return (
    <div>
    <div className="character-card" onClick={toggleHomeworld}>
      <h2 className="character-name">{info.name}</h2>
      {showHomeWorld && (
        <p className="character-planet">{info.homeworld ? info.homeworld.name : 'Loading...'} </p>
      )}
      
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
    </div>
  )
      }

export default Character
