import './App.css';
import Card from './components/Card.jsx';
import React, { useState } from 'react';
import meditation from './assets/meditation.svg'
import programming from './assets/programming.svg'
import time from './assets/time.svg'

function App() {

  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: 'Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      bgColor: '#58caa4',
      image: time,
    },
    {
      title: 'Programa projectes propis',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      bgColor: '#cecece',
      image: programming,
    },
    {
      title: 'Procura descansar',
      description: "Descansar bé i desconectar és vital. D'aquesta manera reduiràs l'estrés i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: '#f1bf53',
      image: meditation,
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  
//  Button Next
  const handleNextData = () => {
    
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tutorialData.length);
  };


//  Button Prev
  const handlePrevData = () => {
   
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tutorialData.length) % tutorialData.length);
  };


  const cardStyles = {
    backgroundColor: tutorialData[currentIndex].bgColor,
   
  };

// Indicator Position
  const handleIndicatorClick = (step) => {
    setCurrentIndex(step - 1); 
  };


  return (
    < div className="App" >
      
        <Card
        title={tutorialData[currentIndex].title}
        description={tutorialData[currentIndex].description}
        image={tutorialData[currentIndex].image}
        cardStyles={cardStyles}
        handlePrevData={handlePrevData}
        handleNextData={handleNextData}
        currentIndex={currentIndex}
        totalItems={tutorialData.length}
        tutorialData={tutorialData}
        handleIndicatorClick={handleIndicatorClick}
      />
      
    </div>

  );
}

export default App;
