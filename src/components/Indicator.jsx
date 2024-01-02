import React from 'react';

const Indicator = ({ totalSteps, currentStep,onClickIndicator }) => {
  const indicators = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="indicator-container">
      {indicators.map((step) => (
        <div
          key={step}
              className={`indicator-dot ${step === currentStep ? 'active' : ''}`}
              onClick={() => onClickIndicator(step)}
        />
      ))}
    </div>
  );
};

export default Indicator;