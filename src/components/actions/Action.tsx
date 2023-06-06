import { useContext } from "react";
import { usePhone } from "../../hooks/use.phone";


export function Action() {
  {handleCall} = useContext
  return (
    <>
      <a href="#" className="call" onClick={handleCall}>
        Call
      </a>
      <a href="#" className="hang active">
        Hang
      </a>
    </>
  );
}
