import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {

  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  });

  const isValidUserInput=userInput.duration>1

  function handleInputChange(inputIndentifier,newValue){
    setUserInput((preValue)=>{
        return {
        ...preValue,
        [inputIndentifier]:+newValue
    };
  });

  }
  return (
    <>
      <Header />
      <UserInput 
        userInput={userInput}
        onChangeInput={handleInputChange}/>

    {!isValidUserInput && (<p className='center'>Please enter a duration greater than zero</p>)}
    {isValidUserInput &&
      <Results 
        userInput={userInput}/>}
    </>


  );
}

export default App;
