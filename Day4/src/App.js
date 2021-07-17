import React, {useState} from 'react'
import Icon from "./Components/Icons"
// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import reactstrap
import { Button,Container, Card, CardBody, Row, Col } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"
// bootstrap/dist/css/bootstrap.css

const tictacArray = new Array(9).fill("");

const App = () => {
    let [isCross, setIsCross] = useState(true);
    let [winMessage, setWinMessage] = useState("");
    let i = 0;
    
    const playAgain = () =>{
        tictacArray.fill("");
        setWinMessage("");
        document.querySelector('.cboard').style.display ="block"
    }

    const winner = () =>{
        if(tictacArray[0]== tictacArray[1] && tictacArray[0]==tictacArray[2] && tictacArray[0]!=""){
            setWinMessage(tictacArray[0]+" has won");
        }
        else if(tictacArray[3]== tictacArray[4] && tictacArray[3]==tictacArray[5] && tictacArray[3]){
            setWinMessage(tictacArray[3]+" has won");
        }
        else if(tictacArray[6]== tictacArray[7] && tictacArray[6]==tictacArray[8] && tictacArray[6]!=""){
            setWinMessage(tictacArray[6]+" has won");
        }
        else if(tictacArray[0]== tictacArray[3] && tictacArray[0]==tictacArray[6] && tictacArray[0]){
            setWinMessage(tictacArray[0]+" has won");
        }
        else if(tictacArray[1]== tictacArray[4] && tictacArray[1]==tictacArray[7] && tictacArray[1]){
            setWinMessage(tictacArray[1]+" has won");
        }
        else if(tictacArray[2]== tictacArray[5] && tictacArray[2]==tictacArray[8] && tictacArray[2]){
            setWinMessage(tictacArray[2]+" has won");
        }
        else if(tictacArray[2]== tictacArray[4] && tictacArray[2]==tictacArray[6] && tictacArray[2]){
            setWinMessage(tictacArray[2]+" has won");
        }
        else if(tictacArray[0]== tictacArray[4] && tictacArray[0]==tictacArray[8] && tictacArray[0]){
            setWinMessage(tictacArray[0]+" has won");
        }
    }

    const changeTurn = (index) =>{
        if (winMessage) {
            return toast("Game is Over. To paly Again click the Button", {type: "success"});
        }
        else if (tictacArray[index] === "") {
            tictacArray[index] = isCross ? "cross" : "circle";
            setIsCross(!isCross);
        }
        else{
            return toast("Open your eyes dude where are you clicking", {type : "warning"})
        }
        winner();
    }

    return(
        <div>

            <div className= "cboard">
                <button className ="choice-btn" onClick={()=>setIsCross(true)}>Cross</button>
                <button className ="choice-btn" onClick={()=>setIsCross(false)}>Circle</button>
                <button className ="submit-btn" onClick={()=>document.querySelector('.cboard').style.display ="none"}>OK</button>
            </div>

            <ToastContainer position = "top-center"></ToastContainer>
            <section className="name">Tic Tac Array</section>
            <header>
                    {
                     winMessage? (
                        <div>
                            <h1 className ="win">
                                {toast(winMessage, {type : "success"})}
                            </h1>
                            <button className="playa" onClick={playAgain}> Play Again</button>
                        </div>
                    ) : (
                        <h1>
                            {isCross? "Cross's Turn": "Circle's Turn"}
                        </h1>
                    )
                    }
            </header>

            <div className="grid"> 
                       {tictacArray.map((value,index)=>(
                           <Card onClick={()=>changeTurn(index)}> 
                               <CardBody className="box"> 
                                   <Icon choice={tictacArray[index]}/>
                               </CardBody>
                           </Card>
                       ))}

                  </div>
        </div>
    )
}

export default App
