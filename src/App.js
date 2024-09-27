import { useState } from "react";
import { StepperContext } from "./contexts/StepperContex";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Account from "./components/steps/Account"
import Details from "./components/steps/Details"
import Final from "./components/steps/Final"
//import Payment from "./components/steps/Payments"

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Account information",
    "Personal Details",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
    
      case 2:
        return <Details />
    
      case 3:
        return <Final />
    
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep}/>
        <div className="my-10 py-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      <StepperControl handleClick={handleClick} steps={steps} currentStep={currentStep}/>
    </div>
  );
}

export default App;
