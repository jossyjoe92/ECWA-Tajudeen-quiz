import React, { useEffect, useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './QuestionsDisplay';
import Confirm from './Confirm';
import Success from './Success';



const tests = [

  { que: "What is the name of the first Man on earth?",ans: "Adam" , options: ["Moses", "Abraham", "Peter"]},
  {que: "How many disciples did Jesus Have?",ans: "12", options: ["13","14","15"] },
  {que: "How many Men was fed with Five loaves of bread and two fishes?",ans: "5000", options: ["3000","4000","7000"] },
  { que: "what is the name of Moses Mother?",ans: "Jochebed", options: ["Hadasah", "Zeruiah","Naomi"] },
  { que: "Apart from Jesus, who else walked on water?",ans: "Peter" , options:["None", "Elijah", "Moses"]},
  { que: "Who is the Saviour of the World?",ans: "Jesus", options:["Elijah", "Samuel", "Paul"] },
  { que: "What is the name of the Oldest man that lived on the earth?",ans: "Methuselah" , options: ["Adam", "Pharoah", "Rahab"]},
  { que: "The Wages of sin is what? ",ans: "death" , options: ["life", "Joy", "Peace"]},
  { que: "How many wives did Solomon have",ans: "700" , options: ["300", "600", "500"]},
  { que: "Who put his hand to the ark of convenant and was struck dead",ans: "Uzzah" , options: ["Rechab", "Matthew", "Judas"]}

]




function UserForm({setStart, timeUp,firstName,setFirstName,lastName,setLastName,email,setEmail, values}) {
  const answers = []
  tests.map(answer=>answers.push(answer.ans))
  const [step, setStep] = useState(-1)
  
  const [userAnswer, setUserAnswer] = useState([])

 

  useEffect(() => {
    //End quiz if time is up (timeUp is from App.js)
    if(timeUp){
      setStep(11)
    }
  }, [timeUp])

  // Proceed to next step
  const nextStep = () => {
    
    setStep(step=> step + 1 )
  };

  // Go back to prev step
  const prevStep = () => {

    setStep(step=> step - 1 )
  };

  // This handles questions display

 function display(step) {
   
  if (step===-1){
    return ( <FormUserDetails
      nextStep={nextStep}
      firstName = {firstName}
      setFirstName={setFirstName}
      lastName = {lastName}
      setLastName={setLastName}
      email = {email}
      setEmail={setEmail}
      setStart={setStart}
     
    />)

  }else if(step===10){
    return (
      <Confirm 
      userAnswer={userAnswer}
      prevStep = {prevStep}
      nextStep = {nextStep}
      tests = {tests}
      values={values}
       
      />)

  }else if(step===11){
    return <Success 
    userAnswer={userAnswer}
    answers={answers}
    values={values}
    setStart={setStart}
     />

  }else{
    //iterate 2ru tests array above and show each by step
     return tests.map((test,i)=>{
       return((step===i)&&(<FormPersonalDetails 
          key={i}
          test={test}
          i={i}
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          userAnswer={userAnswer}
          setUserAnswer = {setUserAnswer}
          
            />)
          )}
        )}
      }
 
  return (
    <>
      {display(step)}
    </>
    )
  }
export default UserForm


