import React from "react"
import "./style.css"
import Button from "./Button"

function Apple() {
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
        </div>
    )
}

export default Apple
