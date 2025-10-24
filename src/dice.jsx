import { use, useState } from "react";
import { Button  } from "react-bootstrap";

const Rules = ()=> {
return(
  <>
<div className="extra">
<h2>How to Play Dice Game</h2>
<div className="extrap">
<p>Select any number</p>
<p>Click on dice image</p>
<p>after click on  dice  if selected number is equal to dice number you will get same point as dice 
if you get wrong guess then  2 point will be dedcuted</p>
 </div>
  </div>
    </> 
)
}

export const Dicepage = () => {
 const [number,setnumber] = useState(1)
  const [select,setselect] = useState()
  const [score,setscore] = useState(0)
  const [notselected,setnotselected] = useState("")
  const [ruletext,setruletext] = useState()
  const [rules,setrules] = useState(false)
  const toggle = () =>{
    setrules(!rules)
    if(!rules){
setruletext(<Rules/>)
    }
    else{
      setruletext(null)
    }
  }

const a= 0
  const arrnum = [1,2,3,4,5,6]

  const getRandomNumber = (min,max) =>{
  const numbers = (max-min)+min
    
console.log("random",Math.ceil(Math.random() * numbers))
return Math.ceil(Math.random() * ((max-min) +min)) 
  }
 function handleclick(i,value){
// setnumber(value)
setselect(value)

 }
 const rolldice = () => {
  if(!select){
    setnotselected("You have not selected any number")
  }
  else{
setnotselected("")
  }

  const randoms = getRandomNumber(1,6)
  setnumber(randoms)
  if(select === randoms){
    setscore((a) => a+randoms)
  }
  
  else{
    setscore((a) => a-2)
  }
 
 }
// 
function handlereset(){
  setscore(0)
  setselect("")

}
//  console.log(number)
  return (
    <>
      <div className="diceheader container d-flex justify-content-between align-items-center ">
        <div className="first d-flex flex-column align-items-center">
          <p className="number">{score}</p>
          <p className="text">Total Score</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <p className="ns text-danger">{notselected}</p>
       <div className=" d-flex align-items-center justify-content-center gap-3"> 
           
             {arrnum.map((value,i) => (
              <div onClick={() => handleclick(i,value)}
                  className="box"
                   key={i}
                   style={{"backgroundColor": select === value ? 'black': 'white',
                    "color": select=== value ? 'white' : 'black'
                   }}
                   
                  >
                {value}
              </div>

             )
            )}
            
            </div> 
           
            <div className="d-flex justify-content-end">
              <p className="para">Select Number</p>

            </div>


          </div>
        </div>
            <div className="diceimage d-flex flex-column gap-2 justify-content-center align-items-center">
        <img  onClick={rolldice} src={`../images/dice/dice_${number}.png`}  height="250px" width="250px"alt="" />
        <p style={{fontWeight:500}}>Click on the Dice to Roll</p>
        <Button onClick={handlereset} style={{color:"black",fontWeight:500}} className="border-dark bg-white">Reset Score</Button>
        <Button  onClick={() => toggle()}  className="border-dark bg-dark text-white">{rules ? "Hide Rules" : "Show Rules"}</Button>
              {ruletext}
              {/* <Button disabled>click me</Button> */}
            </div>
    </>
  );
};
