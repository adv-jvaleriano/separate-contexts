import { useEffect } from "react";
import Capacity from "../Capacity/Capacity";

const SecondaryComponent = () => {

  useEffect(() => {
    console.log("Render SecondaryComponent");
  });
  
  return (
    <>
      <Capacity />
    </>
  )
}

export default SecondaryComponent;
