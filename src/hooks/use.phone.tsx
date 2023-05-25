import { useState } from "react";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  function handleChange() {
    if (isCalling === true) {
      return "message";
    }
    return "off";
  }

  function handleCall() {
    setIsCalling(true);
    handleChange();
  }

  function handleHang() {
    setIsCalling(true);
    setPhoneNumber("");
    handleChange();
  }

  return { isCalling, phoneNumber, handleCall, handleHang };
}
