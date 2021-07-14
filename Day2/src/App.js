import React,{useState} from "react"
import "./style.css"
import Button from "./Button"
// import Counterbutton from "./Counterbutton"

function Apple() {

    let[score, setScore] = useState(0)
    return(
        <div>
            <section className="header">
                <h1><span>Hello</span> Everyone...</h1>
                <h3>React js</h3>
            </section>
            <section className="btns">
                <Button buttonText="Get Started"/>
                <Button buttonText="Counter"/>
                <Button buttonText="Lets Upgrade"/>
            </section>

            <section className="counter">
                <h2>Counter App</h2>

                <h3> The value of score is <span>{score}</span></h3>

                {/* <Counterbutton counterbuttonText="Increment"  onClick={()=>{setScore(score+1)}}/>
                <Counterbutton counterbuttonText="Decrement"/>
                <Counterbutton counterbuttonText="Reset"/>  */}

                <div className="btns">
                    <button onClick ={()=>(score<25)? setScore(score+1) : ""}>Increment</button>
                    <button onClick={()=>(score>0)? setScore(score-1) : "" }>Decrement</button>
                    <button onClick= {()=>{setScore(0)}}>Reset</button>
                </div>
            </section>
        </div>
    )
}

export default Apple

