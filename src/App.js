import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";

function App() {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper />
      </div>
      <StepperControl />
    </div>
  );
}

export default App;
