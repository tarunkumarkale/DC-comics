import React, { useState, useEffect } from 'react';
import { app } from './Storage/Firebase';
import { getDatabase, ref, set, onValue } from 'firebase/database';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [retrievedData, setRetrievedData] = useState(null);

  // Function to share data to Firebase
  const shareData = (userId, imageUrl) => {
    const db = getDatabase(app);
    set(ref(db, 'users/tarun' + userId), {
      description: inputValue,
      email: 'tarun@example.com',
      profile_picture: imageUrl,
    });
  };

  // Function to retrieve data from Firebase
  useEffect(() => {
    const db = getDatabase(app);
    const userId = count; // You can change this ID as needed
    const dataRef = ref(db, 'users/tarun' + userId);

    // Listen for data changes
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setRetrievedData(data); // Update state with retrieved data
    });
  }, [count]); // Runs only when count changes

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter description"
        className="border p-2 rounded"
      />
      <button onClick={() => shareData(count, 'https://example.com/image.jpg')} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Share Data
      </button>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Retrieved Data:</h2>
        {retrievedData ? (
          <div>
            <p>Description: {retrievedData.description}</p>
            <p>Email: {retrievedData.email}</p>
            <p>Profile Picture: <img src={retrievedData.profile_picture} alt="Profile" /></p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;

