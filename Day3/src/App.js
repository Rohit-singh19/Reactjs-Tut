import React, {useState} from 'react'
import Icon from "./Components/Icon"
// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import reactstrap
import { Button,Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"
// bootstrap/dist/css/bootstrap.css

const tiktacArray = new Array(9).fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
        console.log("Hello")
    }

    const findWinner=()=>{
        if(tiktacArray[0]== tiktacArray[1] && tiktacArray[0]==tiktacArray[2] && tiktacArray[0]!=""){
           setWinMessage(tiktacArray[0]+" has won")
        }
        else if(tiktacArray[3]== tiktacArray[4] && tiktacArray[3]==tiktacArray[5] && tiktacArray[3]!=""){
            setWinMessage(tiktacArray[3]+" has won")
        }
        else if(tiktacArray[6]== tiktacArray[7] && tiktacArray[6]==tiktacArray[8] && tiktacArray[6]!=""){
            setWinMessage(tiktacArray[6]+" has won")
        }
        else if(tiktacArray[0]== tiktacArray[3] && tiktacArray[0]==tiktacArray[6] && tiktacArray[0]){
            setWinMessage(tiktacArray[0]+" has won")
        }
        else if(tiktacArray[1]== tiktacArray[4] && tiktacArray[1]==tiktacArray[7] && tiktacArray[1]){
            setWinMessage(tiktacArray[1]+" has won")
        }
        else if(tiktacArray[2]== tiktacArray[5] && tiktacArray[2]==tiktacArray[8] && tiktacArray[2]){
            setWinMessage(tiktacArray[2]+" has won")
        }
        else if(tiktacArray[2]== tiktacArray[4] && tiktacArray[2]==tiktacArray[6] && tiktacArray[2]){
            setWinMessage(tiktacArray[2]+" has won")
        }
        else if(tiktacArray[0]== tiktacArray[4] && tiktacArray[0]==tiktacArray[8] && tiktacArray[0]){
            setWinMessage(tiktacArray[0]+" has won")
        }

    }

    const changeItem = (index)=>{
        if(winMessage){
            return toast("Game has already got over", {type: "success"})
        }
        if(tiktacArray[index] ==""){
            tiktacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else{
            return toast("Open your eyes dude where are you tapping", {type: "error"})
        }
        findWinner()
    }

    return(
         <Container className="p-5"> 
           <ToastContainer position="bottom-center" > </ToastContainer>
            <Row> 

               <Col md={6} className="offset-md-3"> 
                  {
                    winMessage? (
                        <div>
                        <h1 className="text-center"> 
                        {winMessage}
                        </h1>
                        <Button onClick={playAgain}> Play Again</Button>
                        </div>
                    ) : (
                        <h1>
                            {isCross? "Cross's Turn": "Circle's Turn"}
                        </h1>
                    )

                  }
                   
                 <div className="grid"> 
                       {tiktacArray.map((value,index)=>(
                           <Card onClick={()=>changeItem(index)}> 
                               <CardBody className="box"> 
                                   <Icon choice={tiktacArray[index]}/>
                               </CardBody>
                           </Card>
                       ))}

                  </div>


               
                </Col>

            </Row>
             
         </Container>
    )
}

export default App
