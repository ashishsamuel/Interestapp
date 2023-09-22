import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setIsPrincipleValid] = useState(true)
  const [isRateValid,setIsRateValid] = useState(true)
  const [isYearValid,setIsYearValid] = useState(true)

  const handleCalculate = (e)=>{
    e.preventDefault();
    if(!principle || !rate || !year){
      alert("Please fill the form completely")
    }else{
      setInterest( principle*rate*year /100);
    }
  }

  const handleReset = (e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true)
  }

  const validateInput = (e)=>{
    const {value,name} = e.target;
    if(!!value.match(/^[0-9]+$/)){
      if(name === "principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name === "rate"){
        setRate(value)
        setIsRateValid(true)
      }else{
        setYear(value)
        setIsYearValid(true)
      }
      
    }else{

      if(name === "principle"){
        setPrinciple(value)
        setIsPrincipleValid(false)
        if(value === ""){
          setIsPrincipleValid(true)
        }
      }else if(name === "rate"){
        setRate(value)
        setIsRateValid(false)
        if(value === ""){
          setIsRateValid(true)
        }
      }else{
        setYear(value)
        setIsYearValid(false)
        if(value === ""){
          setIsYearValid(true)
        }
      }

    }
  }

  return (
    <>
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark '>
      <div style={{width:'500px'}} className='bg-light rounded p-5'>
        <div className="heading">
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest Easily</p>
        </div>
        <div style={{height:'150px'}} className="interest-card d-flex flex-column justify-content-center align-items-center bg-info text-light shadow">
          <h1>₹ {' '} {interest}</h1>
          <p className="fw-bold">Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}> 

          <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic" label="₹ Principle amount" name='principle' variant="outlined" value={principle || ""}
          onChange={(e)=>validateInput(e)}/>
          </div>
          
          {
            !isPrincipleValid &&
            <div className='mb-3 text-danger'>
              *Invalid Principle Amount
            </div>
          }

          <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic" name='rate' label="Rate of Interest (p.a) %" variant="outlined" value={rate || ""}
          onChange={(e)=>validateInput(e)}/>
          </div>

          {
            !isRateValid &&
            <div className='mb-3 text-danger'>
              *Invalid Rate Value
            </div>
          }

          <div className='mb-3'>
          <TextField className='w-100' id="outlined-basic" name='year' label="Time period ( Yr )" variant="outlined" value={year || ""}
          onChange={(e)=>validateInput(e)}/>
          </div>

          {
            !isYearValid &&
            <div className='mb-3 text-danger'>
              *Invalid Year Input
            </div>
          }

          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{height:'75px',width:'200px'}} className='bg-info' variant="contained" disabled={isPrincipleValid && isRateValid && isYearValid?false:true}>CALCULATE</Button>
            <Button style={{height:'75px',width:'200px'}} variant="outlined" onClick={handleReset}>RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
