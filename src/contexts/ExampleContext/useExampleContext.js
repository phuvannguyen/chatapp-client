import { useContext } from "react";
import ExampleContext from "./ExampleContext";

function useExampleContext(){
  const example = useContext(ExampleContext)
  console.log("example")
  return example
}

export default useExampleContext