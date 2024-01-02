import React from 'react'

const Card = ({ title, description, image, cardStyles, handlePrevData, handleNextData, currentIndex, totalItems }) => {
  console.log('Current Index:', currentIndex);
  console.log('totalItems:', totalItems);

  let buttons;

  if (currentIndex === 0) {
    buttons = <button onClick={handleNextData}>⇨</button>;
  } else if (currentIndex > 0 && currentIndex < totalItems - 1) {
    buttons = (
      <>
        <button onClick={handlePrevData}>⇦</button>
        <button onClick={handleNextData}>⇨</button>
      </>
    );
  } else if (currentIndex === totalItems - 1) {
    buttons = <button onClick={handlePrevData}>⇦</button>;
  }
  
return (
    <>
    <div className='card-border' style={cardStyles}>

        <div className="image-container">
            <img src={image} alt="Tutorial" />
        </div>
      
        <div className="text">
            <h3 className="title">{title}</h3>
            <p className="description"> {description}</p>
        </div>
      
        <div className="button-wrap">
          {buttons}
        </div>
      
    </div>
        

    </>
)
}

export default Card