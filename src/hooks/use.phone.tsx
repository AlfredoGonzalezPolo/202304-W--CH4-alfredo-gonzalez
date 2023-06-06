import { useState } from "react";
import { KeyItem } from "../components/keyboard/key.item";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState<"off" | "message">("off");

  function handleChange() {
    if (isCalling === true) {
      setMessage("message");
    } else {
      setMessage("off");
    }
  }

  function handleCall() {
    setIsCalling(true);
    handleChange();
  }

function handleAddNumber (){
  [...phoneNumber, KeyItem]
}

function handleClick() {
  setPhoneNumber(phoneNumber)
  handleAddNumber()
}

  function handleHang() {
    setIsCalling(true);
    setPhoneNumber("");
    handleChange();
  }

  return { isCalling, message, isActive, phoneNumber, handleCall, handleHang, handleClick, handleAddNumber };
}
