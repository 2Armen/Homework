import React, { useState } from "react";
import { Child } from "../Child/Child";



export const Parent = () => {
    const [text, setText] = useState("");
    const handleChange = (item) => {
      setText(item);
      console.log(text);
    };
  
    return (
      <>
    
      <div>
        <Child 
          handleChange={handleChange} />
      </div>
        </>
    );
  }

