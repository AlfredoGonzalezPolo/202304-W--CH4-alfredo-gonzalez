import { useState } from "react";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleCall() {
    setIsCalling(true);
  }

  function handleHang() {
    setIsCalling(true);
    setPhoneNumber("");
  }

  return { isCalling, phoneNumber, handleCall, handleHang };
}
