import { useState } from "react";
import ExampleContext from "./ExampleContext";

function ExampleContextProvider({ children }){

  const [example, setEx] = useState({
    key : "value"
  })
  return (
    <ExampleContext.Provider value={{example, setEx}}>
      { children }
    </ExampleContext.Provider>
  )
}

export default ExampleContextProvider