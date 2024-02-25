import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css'
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/images.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const imageData = await response.json(); // Parse JSON here
        console.log(imageData[0].image);
        if (Array.isArray(imageData)) {
          setImages(imageData); // Assuming your image data is directly an array
        } else {
          console.error('Data received is not an array:', imageData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="app">
      <h1 className='text-[2em]'>Select a doctor</h1>
      <div className="underline mx-auto w-[6em] bg-[#96E9C6] h-1"></div>
      <div></div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=" pt-[50px] grid grid-cols-3 gap-[4em]">
          
          {images.map((imageData, index) => (
            <ProfileCard key={index} image={imageData.image} name={imageData.name} specialization={imageData.specialty} /> 
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
