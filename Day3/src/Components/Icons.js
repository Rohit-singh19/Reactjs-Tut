import React from "react";
import { FaTimes,FaRegCircle, FaPen  } from "react-icons/fa";

const Icon = (choice)=>{
    switch (choice) {
        case "cross":
            return <FaTimes className="icon"/>;
    
        case "circle":
            return <FaRegCircle className="icon"/>;
    
        default:
            return <FaPen  className="icon"/>;
    }
}

export default Icon;