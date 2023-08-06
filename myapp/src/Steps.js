import React, { useState, useCallback } from 'react';
import  {BiSolidContact} from 'react-icons/bi';
import { FaCcAmazonPay, FaCloudDownloadAlt } from 'react-icons/fa';



const StepItem = ({ stepNumber, currentStep,  onClick }) => {
  const isCompleted = stepNumber < currentStep;

  return (
    <div className='step-item'
      onClick={() => onClick(stepNumber)}
      style={{
       
        backgroundColor: isCompleted ? 'rgb(6, 224, 227)' : 'gray',
       
       
      }}
    >
     {stepNumber}
    </div>
  );
};



const StepsBar = ({ stepNumber }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = useCallback((stepNumber) => {

    setCurrentStep(stepNumber);
  }, []);

  const handleNextClick = useCallback(() => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, MAX_STEPS));
  }, []);

  const handlePreviousClick = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  }, []);

  const MAX_STEPS = 4; 
  const isCompleted = stepNumber < currentStep;


  return (
    <>
    <div className='container'>
      <div className='steps-container'>
        <div className='step-item'>
          <BiSolidContact size={40} className='icon' />
          <StepItem stepNumber={1} currentStep={currentStep} onClick={handleStepClick} />
        </div>
        <div className='line' style={{ width: '70px', backgroundColor: currentStep >= 2 ? 'rgb(6, 224, 227)' : 'gray' }} />
        <div className='step-item'>
          <FaCcAmazonPay size={40} className='icon' />
          <StepItem stepNumber={2} currentStep={currentStep} onClick={handleStepClick} />
        </div>
        <div className='line' style={{ width: '70px', backgroundColor: currentStep >= 3 ? 'rgb(6, 224, 227)' : 'gray' }} />
        <div className='step-item'>
          <FaCloudDownloadAlt size={40} className='icon' />
          <StepItem stepNumber={3} currentStep={currentStep} onClick={handleStepClick} />
        </div>
        
      </div>

      <div className='btn'>
        <button disabled={currentStep === 1} onClick={handlePreviousClick}>
          Previous
        </button>
        <button disabled={currentStep === MAX_STEPS} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default StepsBar;
