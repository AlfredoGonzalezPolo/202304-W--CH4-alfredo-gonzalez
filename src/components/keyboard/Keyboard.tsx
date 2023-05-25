import { KeyItem } from "./key.item";

export function Keyboard() {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <KeyItem></KeyItem>
      </ol>
    </div>
  );
}
